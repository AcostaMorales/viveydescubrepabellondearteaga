
import React from 'react'
import axios from 'axios'

/**
 * App.jsx unificado
 * - Navegación: robusto (intenta múltiples endpoints y parsea diferentes shapes)
 * - PageContent: avanzado (párrafos + listas dinámicas)
 * - Assets + Push incluidos
 */

export default function App() {
  // === CONFIG ===
  const [tab, setTab] = React.useState('navigation')
  const [apiUrl, setApiUrl] = React.useState(import.meta.env.VITE_API_URL || 'http://localhost:5000')
  const [adminToken, setAdminToken] = React.useState(
    localStorage.getItem('adminToken') || import.meta.env.VITE_ADMIN_TOKEN_DEFAULT || ''
  )

  const api = React.useMemo(() => {
    const inst = axios.create({ baseURL: apiUrl, headers: { 'Content-Type': 'application/json' } })
    inst.interceptors.request.use((config) => {
      if (adminToken) config.headers['X-Admin-Token'] = adminToken
      return config
    })
    return inst
  }, [apiUrl, adminToken])

  const [lastResponse, setLastResponse] = React.useState(null)
  const [lastError, setLastError] = React.useState(null)
  const call = async (method, url, data=undefined, cfg={}) => {
    setLastError(null)
    try {
      const res = await api.request({ method, url, data, ...cfg })
      setLastResponse({ url, status: res.status, data: res.data })
      return res.data
    } catch (err) {
      const payload = { url, status: err.response?.status, data: err.response?.data, message: err.message }
      setLastError(payload); console.error('API error:', payload)
      return null
    }
  }
  const saveToken = () => { localStorage.setItem('adminToken', adminToken); alert('Token guardado.') }
  const pingHealth = () => call('GET', '/health')

  // === Helpers de parsing ===
  const toArray = (res) => {
    if (!res) return []
    if (Array.isArray(res)) return res
    if (Array.isArray(res.items)) return res.items
    if (Array.isArray(res.data)) return res.data
    if (res.items && Array.isArray(res.items.docs)) return res.items.docs
    return []
  }

  // === ENUMS/HELPERS ===
  const PAGE_ENUM = [
    'home', 'quever', 'centrohistorico', 'tierradevinos',
    'rutadelagarnacha', 'haciendas', 'rutareligiosa', 'feriasyfestividades'
  ]

  
  // === PUSH UI state ===
  const [pushTitle, setPushTitle] = React.useState('Hola desde la Guía Turística')
  const [pushBody, setPushBody] = React.useState('Esto es una prueba de notificación')
  const [pushUrl, setPushUrl] = React.useState('/')

  // === ASSETS (picker) ===
  const [assets, setAssets] = React.useState([])
  const [assetFolder, setAssetFolder] = React.useState('')
  const [assetUploadFile, setAssetUploadFile] = React.useState(null)
  const [assetUploadFolder, setAssetUploadFolder] = React.useState('guia-turistica/misc')
  const [assetUploadTitle, setAssetUploadTitle] = React.useState('')
  const refreshAssets = async () => {
    const q = assetFolder ? ('?folder='+encodeURIComponent(assetFolder)) : ''
    const data = await call('GET', '/api/assets'+q)
    setAssets(toArray(data))
  }
  const uploadAsset = async () => {
    if (!assetUploadFile) return alert('Selecciona un archivo')
    const form = new FormData()
    form.append('file', assetUploadFile)
    form.append('rutaFolder', assetUploadFolder) // clave correcta
    form.append('title', assetUploadTitle)
    const data = await call('POST', '/api/assets/upload', form, { headers: { 'Content-Type': 'multipart/form-data' } })
    if (data) { alert('Subido'); refreshAssets() }
  }
  const deleteAsset = async (id) => {
    if (!confirm('¿Eliminar asset?')) return
    await call('DELETE', `/api/assets/${id}`)
    refreshAssets()
  }

  // === NAVIGATIONCARD (robusto) ===
  const [navAll, setNavAll] = React.useState([])
  const [navSelectedId, setNavSelectedId] = React.useState('')
  const [navForm, setNavForm] = React.useState({ title:'', page:'home', esInformativa:true, imagenUrl:'' })
  const [pageForFallback, setPageForFallback] = React.useState('home') // público por página

  const tryMany = async (tries) => {
    for (const t of tries) {
      const res = await call('GET', t)
      const arr = toArray(res)
      if (arr.length) return arr
    }
    return []
  }

  const listNavAll = async () => {
    // Intentos admin (dos bases posibles)
    const arr1 = await tryMany([
      '/api/navigation-card/admin/navigation-cards',
      '/api/navigation/admin/navigation-cards'
    ])
    if (arr1.length) { setNavAll(arr1); return }
    // Intentos públicos por página
    const q = `?page=${encodeURIComponent(pageForFallback)}`
    const arr2 = await tryMany([
      `/api/navigation-card/navigation-cards${q}`,
      `/api/navigation/navigation-cards${q}`,
      '/api/navigation',
      '/api/navigation-cards'
    ])
    setNavAll(arr2)
  }

  const fillNavFromId = () => {
    const n = navAll.find(x=>String(x._id)===String(navSelectedId))
    if (!n) return alert('Selecciona una navigation existente')
    setNavForm({
      title: n.title || n.name || '',
      page: n.page || 'home',
      esInformativa: n.esInformativa ?? true,
      imagenUrl: n.imagenUrl || n.imageUrl || ''
    })
  }

  const createNav = () => call('POST','/api/navigation-card/admin/navigation-cards', navForm).then(listNavAll)
  const updateNav = () => {
    if(!navSelectedId) return alert('Selecciona un ID')
    return call('PUT', `/api/navigation-card/admin/navigation-cards/${navSelectedId}`, navForm).then(listNavAll)
  }
  const deleteNav = () => {
    if(!navSelectedId) return alert('Selecciona un ID')
    return call('DELETE', `/api/navigation-card/admin/navigation-cards/${navSelectedId}`).then(()=>{ setNavSelectedId(''); listNavAll() })
  }
  const chooseImageForNav = (url) => setNavForm(prev=>({ ...prev, imagenUrl:url }))

  // === PAGECONTENT (avanzado) ===
  const [pageForm, setPageForm] = React.useState({
    name:'', navigationCard:'', contentTitle:'', paragraphs:[], lists:[], heroImageUrl:''
  })
  const [pageSelectedId, setPageSelectedId] = React.useState('')
  const [translateTo, setTranslateTo] = React.useState('en')

  const createPage = async () => {
    if (!pageForm.navigationCard) return alert('Selecciona una NavigationCard')
    const payload = {
      name: pageForm.name,
      navigationCard: pageForm.navigationCard,
      content: {
        title: pageForm.contentTitle,
        paragraphs: pageForm.paragraphs || [],
        lists: pageForm.lists || [],
        heroImageUrl: pageForm.heroImageUrl
      }
    }
    return call('POST','/api/page-contents/admin/page-content', payload)
  }
  const updatePage = async () => {
    if (!pageSelectedId) return alert('Proporciona el ID de PageContent a actualizar')
    const payload = {
      content: {
        title: pageForm.contentTitle,
        paragraphs: pageForm.paragraphs || [],
        lists: pageForm.lists || [],
        heroImageUrl: pageForm.heroImageUrl
      }
    }
    return call('PUT', `/api/page-contents/admin/page-content/${pageSelectedId}`, payload)
  }
  const deletePage = async () => {
    if (!pageSelectedId) return alert('Proporciona el ID a borrar')
    return call('DELETE', `/api/page-contents/admin/page-content/${pageSelectedId}`)
  }
  const translatePage = async () => {
    if (!pageSelectedId) return alert('ID requerido')
    return call('POST', `/api/page-contents/admin/page-content/${pageSelectedId}/translate`, { to: translateTo })
  }

  // initial fetches
  React.useEffect(()=>{ listNavAll(); refreshAssets(); },[])

  return (
    <div className="wrap">
      <div className="toolbar">
        {['navigation','pagecontent','assets','push','config','output'].map(t=>(
          <button key={t} className={'tabbtn '+(tab===t?'active':'')} onClick={()=>setTab(t)}>{t}</button>
        ))}
      </div>

      {tab==='config' && (
        <section className="card">
          <h2 className="title">Configuración</h2>
          <div className="kvs">
            <label>API URL</label>
            <input value={apiUrl} onChange={(e)=>setApiUrl(e.target.value)} placeholder="http://localhost:5000" />
            <label>X-Admin-Token</label>
            <input value={adminToken} onChange={(e)=>setAdminToken(e.target.value)} placeholder="pegue su token" />
          </div>
          <div className="row" style={{marginTop:8}}>
            <button onClick={saveToken}>Guardar Token</button>
            <button onClick={()=>{ localStorage.removeItem('adminToken'); setAdminToken('') }}>Borrar Token</button>
            <button onClick={pingHealth}>Probar /health</button>
          </div>
          <p className="muted">Agrega el dominio del panel a <code>FRONTEND_ORIGINS</code> en el server para CORS.</p>
        </section>
      )}

      {tab==='assets' && (
        <section className="card">
          <h2 className="title">Assets – Subir y Elegir</h2>
          <div className="kvs">
            <label>Subir archivo</label>
            <input type="file" onChange={(e)=>setAssetUploadFile(e.target.files?.[0] || null)} />
            <label>Folder</label>
            <input value={assetUploadFolder} onChange={(e)=>setAssetUploadFolder(e.target.value)} placeholder="guia-turistica/misc" />
            <label>Título</label>
            <input value={assetUploadTitle} onChange={(e)=>setAssetUploadTitle(e.target.value)} placeholder="opcional" />
          </div>
          <div className="row" style={{marginTop:8}}>
            <button onClick={uploadAsset}>Subir</button>
            <span className="muted">Tras subir, refresca la lista.</span>
          </div>
          <hr/>
          <div className="kvs">
            <label>Filtrar por folder</label>
            <input value={assetFolder} onChange={(e)=>setAssetFolder(e.target.value)} placeholder="vacío = todos" />
          </div>
          <div className="row" style={{marginTop:8}}>
            <button onClick={refreshAssets}>Refrescar lista</button>
          </div>
          <hr/>
          <div className="thumbs">
            {assets.map(a=> (
              <div key={a._id || a.url} className="thumb">
                {a.url?.match(/\.(mp4|webm|mov)$/i) ? (
                  <video src={a.url} controls style={{maxWidth:'100%', borderRadius:8}}/>
                ) : (
                  <img src={a.url} alt={a.title||'asset'} />
                )}
                <div className="badge">{a.rutaFolder || a.folderPath || 'sin-folder'}</div>
                <small className="muted" title={a.url}>{a.title || 'sin título'}</small>
                <div className="row">
                  <button onClick={()=>chooseImageForNav(a.url)}>Usar en Navigation</button>
                  <button onClick={()=>setPageForm(prev=>({...prev, heroImageUrl:a.url}))}>Usar en PageContent</button>
                  {a._id && <button className="danger" onClick={()=>deleteAsset(a._id)}>Eliminar</button>}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {tab==='navigation' && (
        <section className="card">
          <h2 className="title">NavigationCard – Crear/Editar</h2>
          <div className="kvs">
            <label>Page (fallback público)</label>
            <select value={pageForFallback} onChange={(e)=>setPageForFallback(e.target.value)}>
              {PAGE_ENUM.map(p=>(<option key={p} value={p}>{p}</option>))}
            </select>

            <label>Seleccionar existente</label>
            <select value={navSelectedId} onChange={(e)=>setNavSelectedId(e.target.value)}>
              <option value="">-- nueva --</option>
              {navAll.map(n=>(<option key={n._id} value={n._id}>{(n.title||n.name)} [{n.page}]</option>))}
            </select>
            <label></label>
            <button onClick={fillNavFromId}>Cargar en formulario</button>

            <label>Título</label>
            <input value={navForm.title} onChange={(e)=>setNavForm(prev=>({...prev, title:e.target.value}))} placeholder="Home card" />
            <label>Página</label>
            <select value={navForm.page} onChange={(e)=>setNavForm(prev=>({...prev, page:e.target.value}))}>
              {PAGE_ENUM.map(p=>(<option key={p} value={p}>{p}</option>))}
            </select>
            <label>Informativa</label>
            <select value={navForm.esInformativa? 'true':'false'} onChange={(e)=>setNavForm(prev=>({...prev, esInformativa: e.target.value==='true'}))}>
              <option value="true">true</option>
              <option value="false">false</option>
            </select>
            <label>Imagen (imagenUrl)</label>
            <input value={navForm.imagenUrl} onChange={(e)=>setNavForm(prev=>({...prev, imagenUrl:e.target.value}))} placeholder="elige desde Assets o pega URL" />
          </div>
          <div className="row" style={{marginTop:8}}>
            <button onClick={createNav}>Crear</button>
            <button onClick={updateNav}>Actualizar</button>
            <button className="danger" onClick={deleteNav}>Eliminar</button>
            <button onClick={listNavAll}>Refrescar lista</button>
          </div>
          <hr/>
          <pre>{JSON.stringify(navForm, null, 2)}</pre>
        </section>
      )}

      {tab==='pagecontent' && (
        <section className="card">
          <h2 className="title">PageContent – párrafos y listas dinámicas</h2>

          <div className="kvs">
            <label>NavigationCard</label>
            <select
              value={pageForm.navigationCard}
              onChange={(e)=>setPageForm(prev=>({...prev, navigationCard:e.target.value}))}
            >
              <option value="">-- selecciona --</option>
              {navAll.map(n=>(
                <option key={n._id} value={n._id}>{(n.title||n.name)} [{n.page}]</option>
              ))}
            </select>

            <label>Nombre (slug)</label>
            <input
              value={pageForm.name}
              onChange={(e)=>setPageForm(prev=>({...prev, name:e.target.value}))}
              placeholder="home"
            />

            <label>Título</label>
            <input
              value={pageForm.contentTitle}
              onChange={(e)=>setPageForm(prev=>({...prev, contentTitle:e.target.value}))}
              placeholder="Título de la página"
            />

            {/* === PÁRRAFOS === */}
            <label>Párrafos</label>
            {(pageForm.paragraphs || []).map((p,i)=>(
              <div key={i} className="row">
                <textarea
                  value={p}
                  onChange={(e)=>{
                    const copy=[...pageForm.paragraphs]; copy[i]=e.target.value;
                    setPageForm(prev=>({...prev, paragraphs:copy}));
                  }}
                  placeholder={`Párrafo ${i+1}`}
                />
                <button className="danger" onClick={()=>{
                  const copy=[...pageForm.paragraphs]; copy.splice(i,1);
                  setPageForm(prev=>({...prev, paragraphs:copy}));
                }}>✕</button>
              </div>
            ))}
            <button onClick={()=>{
              setPageForm(prev=>({...prev, paragraphs:[...(prev.paragraphs||[]), '']}));
            }}>+ Agregar párrafo</button>

            {/* === LISTAS === */}
            <label>Listas</label>
            {(pageForm.lists || []).map((lst,i)=>(
              <div key={i} className="list-block">
                <input
                  value={lst.title || ''}
                  onChange={(e)=>{
                    const copy=[...pageForm.lists];
                    copy[i]={...copy[i], title:e.target.value};
                    setPageForm(prev=>({...prev, lists:copy}));
                  }}
                  placeholder="Título de la lista"
                />
                <label>
                  Ordenada:
                  <input
                    type="checkbox"
                    checked={!!lst.ordered}
                    onChange={(e)=>{
                      const copy=[...pageForm.lists];
                      copy[i]={...copy[i], ordered:e.target.checked};
                      setPageForm(prev=>({...prev, lists:copy}));
                    }}
                  />
                </label>
                {(lst.items||[]).map((it,j)=>(
                  <div key={j} className="row">
                    <input
                      value={it}
                      onChange={(e)=>{
                        const copy=[...pageForm.lists];
                        const items=[...(copy[i].items||[])];
                        items[j]=e.target.value;
                        copy[i]={...copy[i], items};
                        setPageForm(prev=>({...prev, lists:copy}));
                      }}
                      placeholder={`Ítem ${j+1}`}
                    />
                    <button className="danger" onClick={()=>{
                      const copy=[...pageForm.lists];
                      const items=[...(copy[i].items||[])];
                      items.splice(j,1);
                      copy[i]={...copy[i], items};
                      setPageForm(prev=>({...prev, lists:copy}));
                    }}>✕</button>
                  </div>
                ))}
                <button onClick={()=>{
                  const copy=[...pageForm.lists];
                  const items=[...(copy[i].items||[]), ''];
                  copy[i]={...copy[i], items};
                  setPageForm(prev=>({...prev, lists:copy}));
                }}>+ Ítem</button>
                <button className="danger" onClick={()=>{
                  const copy=[...pageForm.lists]; copy.splice(i,1);
                  setPageForm(prev=>({...prev, lists:copy}));
                }}>Eliminar lista</button>
                <hr/>
              </div>
            ))}
            <button onClick={()=>{
              setPageForm(prev=>({...prev, lists:[...(prev.lists||[]), {title:'', ordered:false, items:[]}] }));
            }}>+ Nueva lista</button>

            <label>Hero Image (URL)</label>
            <input
              value={pageForm.heroImageUrl}
              onChange={(e)=>setPageForm(prev=>({...prev, heroImageUrl:e.target.value}))}
              placeholder="elige desde Assets o pega URL"
            />

            <label>ID para actualizar/borrar/traducir</label>
            <input
              value={pageSelectedId}
              onChange={(e)=>setPageSelectedId(e.target.value)}
              placeholder="_id de PageContent"
            />
            <label>Traducir a</label>
            <input value={translateTo} onChange={(e)=>setTranslateTo(e.target.value)} placeholder="en|ja|..." />
          </div>

          <div className="row" style={{marginTop:8}}>
            <button onClick={createPage}>Crear</button>
            <button onClick={updatePage}>Actualizar</button>
            <button className="danger" onClick={deletePage}>Eliminar</button>
            <button onClick={translatePage}>Traducir & Cachear</button>
          </div>

          <hr/>
          <pre>{JSON.stringify({
            name: pageForm.name,
            navigationCard: pageForm.navigationCard,
            content: {
              title: pageForm.contentTitle,
              paragraphs: pageForm.paragraphs || [],
              lists: pageForm.lists || [],
              heroImageUrl: pageForm.heroImageUrl
            }
          }, null, 2)}</pre>
        </section>
      )}

      {tab==='push' && (
        <section className="card">
          <h2 className="title">Push – Enviar Notificación</h2>
          <div className="kvs">
            <label>Título</label>
            <input value={pushTitle} onChange={(e)=>setPushTitle(e.target.value)} />
            <label>Cuerpo</label>
            <input value={pushBody} onChange={(e)=>setPushBody(e.target.value)} />
            <label>URL</label>
            <input value={pushUrl} onChange={(e)=>setPushUrl(e.target.value)} />
          </div>
          <div className="row" style={{marginTop:8}}>
            <button onClick={()=>call('POST','/api/push/broadcast',{ title:pushTitle, body:pushBody, url:pushUrl })}>Enviar</button>
          </div>
        </section>
      )}

      {tab==='output' && (
        <section className="card">
          <h2 className="title">Salida</h2>
          {lastError && (<div><div className="danger">Error</div><pre>{JSON.stringify(lastError,null,2)}</pre></div>)}
          {lastResponse && (<div><div className="success">OK</div><pre>{JSON.stringify(lastResponse,null,2)}</pre></div>)}
          {!lastResponse && !lastError && <p className="muted">Aquí verás la respuesta del servidor…</p>}
        </section>
      )}
    </div>
  )
}

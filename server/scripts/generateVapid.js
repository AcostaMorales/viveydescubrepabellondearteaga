/*Aqui generaremos las keys para la web-push*/
import webpush from 'web-push'
const keys = webpush.generateVAPIDKeys()
console.log(keys) // { publicKey, privateKey }

export const corsOptions = {
    origin: process.env.NODE_ENV === 'production' ? [
        process.env.CLIENT_URL,
        process.env.PANEL_ADMIN,
        process.env.CLIENT_URL_PREVIEW,
        process.env.API_BASE,
        'https://viveydescubrepabellondearteaga.vercel.app',
        'https://vivepabellondearteaga.onrender.com'
    ] : [
        process.env.CLIENT_URL,
        process.env.PANEL_ADMIN,
        process.env.CLIENT_URL_PREVIEW,
        process.env.API_BASE,
        'http://localhost:3000',
        'http://localhost:4000',
        'http://localhost:5173',
        'http://localhost:5174',
        'null' // Para archivos locales en desarrollo
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};


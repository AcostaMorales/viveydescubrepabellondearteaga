export const corsOptions = {
    origin: [process.env.CLIENT_URL,
        process.env.PANEL_ADMIN,
        process.env.CLIENT_URL_PREVIEW
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};


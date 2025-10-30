import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import routes from './routes/index.js';
import cosrOptions from './config/corsOptions.js';


const app = express();

// Mideddlewares
app.use(cors(cosrOptions));
app.use(express.json({limit: '1mb'}));
app.use(cookieParser());
app.use(express.static('public'));

// Rutas
app.use('/api', routes);

export default app;
import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import errorHandler from './middlewares/error.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import routes from './routes/index.js';
import cosrOptions from './config/corsOptions.js';


const app = express();

// Mideddlewares
app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));
app.use(cors(cosrOptions));
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use(express.json({limit: '1mb'}));
app.use(cookieParser());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api', routes);

export default app;
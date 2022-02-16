import express from 'express';
import taskRoutes from './routes/task.js'
import cors from 'cors';
import morgan from 'morgan';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { options } from './swaggerO.js';

const app = express();
const specs = swaggerJSDoc(options);


app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use(taskRoutes);

app.use('/docs',swaggerUI.serve, swaggerUI.setup(specs));

export default app;
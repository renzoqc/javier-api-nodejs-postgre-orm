import 'reflect-metadata'

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import {createConnection} from 'typeorm'

import userRoutes from './routes/user.routes'

const app = express()
createConnection();

//middleswares
app.use(cors());
app.use(morgan('dev')); //para dar formato a los que queremos ver por consola
app.use(express.json());

//routes
app.use(userRoutes);

app.listen(3000);
console.log('Server on port', 3000);
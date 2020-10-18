import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import cors from 'cors'

import {createRoles} from './libs/initialSetup'

const app = express()
app.use(cors());
createRoles();

import productsRoutes from './routes/products.routes'
import authRoutes from './routes/auth.routes'
import userRoutes from './routes/users.routes'

app.set('pkg',pkg);

app.use(express.json());
app.use(morgan('dev'));

app.get('/',(req,res) => {
    res.json({
        author: app.get('pkg').author,
        name: app.get('pkg').name
    })
})

app.use('/api/products',productsRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/users',userRoutes)

export default app;
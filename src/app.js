import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import cors from 'cors'

import {createRoles} from './libs/initialSetup'

const app = express()
app.use(cors());
createRoles();

import productsRoutes from './routes/product.routes'
import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'
import roleRoutes from './routes/role.routes'

app.set('pkg',pkg);

app.use(express.json());
app.use(morgan('dev'));

app.get('/',(req,res) => {
    res.json({
        author: app.get('pkg').author,
        name: app.get('pkg').name
    })
})

app.use('/api/product',productsRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/user',userRoutes)
app.use('/api/role',roleRoutes)

export default app;
import express from 'express'
import swaggerUi from 'swagger-ui-express'

import { usersRoutes } from './routes/users.routes'
import swaggerConfig from './swagger.json'

// eslint-disable-next-line import/no-unresolved
const app = express()

app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig))
app.use('/users', usersRoutes)

export { app }

//e.g server.js
import express from 'express'
import ViteExpress from 'vite-express'

// Imports Routes
import api from './routes/api/index.js'
import category from './routes/category/index.js'
import genre from './routes/genre/index.js'

const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api', api)
app.use('/category', category)
app.use('/genre', genre)

// ViteExpress
ViteExpress.listen(app, 3000, () => {
  console.log('Server is listening...')
})

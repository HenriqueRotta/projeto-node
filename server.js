const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// Iniciando o app
const app = express()
app.use(express.json())
app.use(cors())

//iniciando DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useUnifiedTopology: true })

requireDir('./src/Models')

// Rotas
app.use('/api', require('./src/routes'))

app.listen(3001)
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')
require('dotenv/config')

const app = express()

mongoose.connect(process.env.DB_CONFIG, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors());
app.use(express.json()) //Por padrão, o express não entende json. Para isso, é necessário adicionar essa linha de comando
                        //Precisa vir antes das de app.use(routes)
app.use(routes)

app.listen(3333)


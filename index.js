require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./db/connection')
const router = require('./Routes/router')



const cartServer = express()
cartServer.use(cors())
cartServer.use(express.json())
cartServer.use(router)


const PORT = 3000 || process.env.PORT
cartServer.listen(PORT,()=>{
    console.log(`Style Guru server started at port ${PORT}`);

})

cartServer.get('/',(req,res)=>{
    res.send('<h1>Style Guru started and waiting for client requests!!!</h1>')
})
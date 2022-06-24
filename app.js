const express=require('express')
const app=  express()
const cors = require('cors')
const start=require('./routes/start')
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())
app.listen(3000,()=>{
    console.log('connected at port number 3000')
})

app.use('/game',start)


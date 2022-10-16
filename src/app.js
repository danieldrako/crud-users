const express = require('express')

const userRouter = require('./users/users.routers')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'OK!'})
})

app.use('/', userRouter)

app.listen(9000, ()=>{
    console.log('server started at port 900')
})





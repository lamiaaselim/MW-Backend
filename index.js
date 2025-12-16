const express = require('express')

const server = express()

server.listen(8080, () => {
    console.log("I'm listening express 👻")
})


//1. First MW => login and log method and url 
server.use((req, res, next) => {
    console.log(req.method, req.url)
    // res.status(200).json({ message: 'Hello from MW 01' })
    next()
})

//2. Second MW => authenticated MW
server.use((req, res, next) => {
    console.log("authenticated MW 02 ")
    next(new Error('Not authenticated'))
})

//3. Third MW => Not-Found MW
server.use((req, res, next) => {
    res.status(404).json({ message: 'Not Found MW 03' })
})

//4. Fourth => Error MW
server.use((error, req, res, next) => {
    // A. Develop Time
    res.status(500).json({ message: 'Error MW 04: ' + error })
    // A. Production Time
    // res.status(500).json({ message: 'Internal Server Error' })
})
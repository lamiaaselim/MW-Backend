const express = require("express")

const server = express()

server.listen(8000, () => {
    console.log(" express server listening ....👻");
})

// 1. First MW => Login => log method and url
server.use((req, res, next) => {
    console.log(req.url, req.method)
    // res.status(200).json({ message: "Hello From First MW" })
    next()
})

// 2. Second MW => authenticated MW
server.use((req, res, next) => {
    // console.log("authenticated MW 02")
    next(new Error("not authenticated"))
})

// 3. Third MW => NOT -Found
server.use((req, res, next) => {
    res.status(404).json({ message: "Not found MW 03" })
    next()
})

// 4. Forth => Error MW04
server.use((error, req, res, next) => {
    // res.status(500).json({ message: "Error MW04 " + error})
    res.status(500).json({message: "Internal server Error"})
})
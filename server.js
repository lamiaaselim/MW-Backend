const express = require("express")
const studentRouter = require('./routes/student.route')
const departmentRouter = require('./routes/department.route')


const server = express()

server.listen(8000, () => {
    console.log("Express server listening ....👻");
})

// 1. First MW => Login => log method and url
server.use((req, res, next) => {
    console.log(req.method, req.url);
    next()
})

/*****Routes*******/
server.use(studentRouter)
server.use(departmentRouter)

// 3. Third MW => NOT - Found
server.use((req, res, next) => {
    res.status(404).json({ message: "Not found MW 03" })
    next()
})

// 4. Forth => Error MW04
server.use((error, req, res, next) => {
    res.status(500).json({ message: "Error MW04 " + error })
    // res.status(500).json({message: "Internal server Error"})
})
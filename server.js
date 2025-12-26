const express = require("express")
const dotenv = require("dotenv")
const morgan = require('morgan')
const studentRouter = require('./routes/student.route')
const departmentRouter = require('./routes/department.route')
const connectDB = require('./config/db.config')
dotenv.config()
const server = express()

// Connect to DataBase
connectDB();

// Built-in MW to handle JSON data
server.use(express.json())


// 1. First MW => Login => log method and url
// server.use(morgan('combined'))
server.use(morgan('dev'))


/*****Routes*******/
server.set('view engine', 'pug')

server.use(studentRouter)
server.use(departmentRouter)

server.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
})


// 3. Third MW => NOT - Found Break => 2: 45
server.use((req, res, next) => {
    res.status(404).json({ message: "Not found MW 03" })
    next()
})

// 4. Forth => Error MW04
server.use((error, req, res, next) => {
    res.status(500).json({ message: "Error MW04 " + error })
    // res.status(500).json({message: "Internal server Error"})
})


// Start the server   
const PORT = process.env.PORT || 8000
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
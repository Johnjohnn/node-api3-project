const express = require ("express")
const userRouter = require("./users/userRouter")




const server =  express()

const port = 4000 
// takes incomingrequest JSON data and parses it into req.body
server.use(express.json())

// third party middleware that will log a line to the console with request details 
server.use(userRouter)

server.listen(port, () => {
    console.log(`server running at http:localhost:${port}`)
})
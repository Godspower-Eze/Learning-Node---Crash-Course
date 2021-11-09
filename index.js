//  const {Person} = require("./person") // Common js
// // import { Person } from "./person" //ES6

// const Logger = require("./logger")

// const personOne = new Person("Godspower", 23)

// console.log(personOne.greeting()) 

// const logger = new Logger()

// logger.on('message', (data) => {
//     console.log('Called Listener:', data)
// })

// logger.log('Hello World ')
// logger.log('Hello ')
// logger.log('Hi')

const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((request, response) => {
    // if (request.url == '/'){
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if (err) throw err
    //         response.writeHead(200, {"Content-Type":"text/html"})
    //         response.end(content)
    //     })
    // }else if(request.url == '/about'){
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         if (err) throw err
    //         response.writeHead(200, {"Content-Type":"text/html"})
    //         response.end(content)
    //     })
    // }else if(request.url == '/api/users'){
    //     const users = [
    //         {name: "Bob Smith", age: 40},
    //         {name: "Godspower", age: 34}
    //     ]
    //     response.writeHead(200, {"Content-Type":"application/json"})
    //     response.end(JSON.stringify(users))
    // }

    // Build File Path
    let filePath = path.join(__dirname, 'public', request.url === '/'?'index.html':request.url)

    // Extension of file
    let extname = path.extname(filePath)

    let contentType = 'text/html'

    // Check ext and content type
    switch(extname){
        case '.js':
            contentType = 'text/javascript'
            break
        case '.css':
            contentType = 'text/css'
            break
        case '.json':
            contentType = 'application/json'
            break
        case '.png':
            contentType = 'image/png'
            break
        case '.jpg':
            contentType = 'image/jpg'
            break
    }

    // Read File
    fs.readFile(filePath, (err, content) => {
        if(err){
            if(err.code === 'ENOENT'){
                // If page not found
                fs.readFile(__dirname, 'public', '404.html', (err, content) => {
                    response.writeHead(200, {'Content-Type':'text/html'})
                    response.end(content, 'utf8')
                })
            }else{
                response.writeHead(500)
                response.end('Server Error... '+ err.code)
            }
        }else{
            // Success
            response.writeHead(200, contentType)
            response.end(content, 'utf8')
        }
    })


})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log("Server Running on port ", PORT))

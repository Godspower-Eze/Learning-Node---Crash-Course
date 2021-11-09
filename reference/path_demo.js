const path = require('path')

// Basename - Gets the base file name
console.log(__filename)
console.log(path.basename(__filename))

//Directory name
console.log(path.dirname(__filename))
console.log(path.dirname(__dirname))

//File Extension
console.log(path.extname(__filename))

// Create Path Object
console.log(path.parse(__filename))

// Concatenate Paths
console.log(path.join(__dirname, 'test', 'hello.html'))
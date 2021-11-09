// Module Wrapper Function
// (
//     function (exports, require, module, __filename, __dirname) {
        
//     }
// )

console.log(__dirname, __filename)

class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    greeting(){
        return "Hello "+ this.name
    }
}

module.exports = {
    Person
}
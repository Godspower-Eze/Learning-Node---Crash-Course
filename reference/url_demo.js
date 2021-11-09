const url = require("url")

const myUrl = new URL('https://www.npmjs.com/package/bip39?id=12')

// Serialized URL
console.log(myUrl.href)
console.log(myUrl.toString())

//Host(Root domain)
console.log(myUrl.host)

//Hostname(Doesn't include the port)
console.log(myUrl.hostname)

//Pathname
console.log(myUrl.pathname)

// Serialized Query
console.log(myUrl.search)

// Params Object
console.log(myUrl.searchParams)

// Add params
myUrl.searchParams.append('abc', 123)
console.log(myUrl.searchParams)

// Loop through params
myUrl.searchParams.forEach(
    (value, key) => {
        console.log(`${key}: ${value}`)
    }
)

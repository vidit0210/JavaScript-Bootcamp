let name = "    Vidit Shah    "
//Length is the Property on the String
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
let password = "abc123456"
console.log(password.includes('abc'))
console.log(name.trim())

//iSValidPassword

let isValidPassword = (pass) => {
    // let answer = (pass.length > 9 && (!pass.includes('password'))) ? true : false
    // return answer
    return (pass.length > 9 && (!pass.includes('password')))

}
console.log(isValidPassword('asddsafsafasdfads'))
console.log(isValidPassword('asadpassword'))
//string 
name ="ViditShah"
console.log(name.length)

function isValidPassword(str){
    // if(str.length>=8 && !(str.toLowerCase().includes('password'))){
    //     return true
    // } 
    // return false;
    return str.length>=8 && !(str.toLowerCase().includes('password'))
}
console.log(isValidPassword('qwertyioaps'))
console.log(isValidPassword('dsakdavpassword'))
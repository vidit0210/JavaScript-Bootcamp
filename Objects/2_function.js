let getTemp = function(fahrenheit){
    return{
        fahrenheit:fahrenheit,
        celsius:(fahrenheit -32) *(5/9),
        kelvin:(fahrenheit+459.67) *5/9
    }
}

let MumbaiDetails = getTemp(74)
console.log(`Temp in Fahrenheit is ${MumbaiDetails.fahrenheit}
            Temp in Celcius ${MumbaiDetails.celsius}
            Temp in Kelvin is  ${MumbaiDetails.kelvin}`)
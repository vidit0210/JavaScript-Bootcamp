//Arguments
//Multiple Arguments

let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Player ${name} scored ${score}`
}

//Challenge
let getTip = function (amount, tip = 0.2) {
    return tip * amount;
}

console.log((getScoreText("Vidit", 90)))
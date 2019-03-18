let num =827.672;
console.log(num.toFixed(1))
let min=10;
let max=20;
let random_num = Math.floor(Math.random()*(max-min+1)) + min;

function Guess(num){
    min=0;
    max=5;
    let random = Math.floor(Math.random() * (max-min+1)+ min)
    console.log(random)
    return random==num
}
console.log(Guess(1))
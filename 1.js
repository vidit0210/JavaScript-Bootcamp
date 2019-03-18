process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    let data =input.split('\n')
    let firstLine = data[0].split(' ');
    let len = firstLine[0];
    let arr = data[1].split(' ').map(Number)
   GetPower(arr)


}

// let arr =[2,3,10,12,15,22]

function GetPower(arr){
 arr= arr.sort((a,b)=>{a>b})
let even = arr.filter( a=>{
    return a%2===0
})
let sumeven =0;
let sumodd=0;
even.forEach(e => sumeven+=e);
even.push(sumeven);
let odd = arr.filter( a=>{
    return !(a%2===0)
})
odd.forEach(o =>sumodd+=o );
odd.push(sumodd);
let power =[...even,...odd]
var s = "";
for(var i = 0; i < power.length; i += 1) {
  s += power[i] + " ";
}
console.log(s);

}

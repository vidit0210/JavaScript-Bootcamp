function convertFahrenheitToCelsius(temperature) {
  return (temperature - 32) * (5 / 9);
}
console.log(convertFahrenheitToCelsius(32));
console.log(convertFahrenheitToCelsius(68));

let name = undefined;
if (name === undefined) {
  console.log("Name is undefined");
} else {
  console.log(name);
}

function square(num) {
  return num * num;
}
console.log(square());

let age = 27;
function reset() {
  return null;
}
age = reset();
console.log(age);

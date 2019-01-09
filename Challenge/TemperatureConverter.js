let tempInFahrenheit = 68;
//Celcis and  Kelvin
let tempInCelcius = (tempInFahrenheit - 32) * (5 / 9);
let tempInKelvin = (tempInFahrenheit + 459.67) * (5 / 9);
console.log(tempInKelvin);
console.log(tempInCelcius);

if (tempInCelcius <= 0) {
  console.log("Freezing Outside");
} else if (tempInCelcius >= 45) {
  console.log("Hot Outside");
} else {
  console.log("Free to go Outside");
}

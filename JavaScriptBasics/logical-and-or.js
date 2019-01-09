let temp = 55;
if (temp >= 60 && temp <= 90) {
  console.log("It is Pretty Nice out");
}
if (temp >= 55 || temp <= 90) {
  console.log("Do not go Outside");
}
let isGuestOneVegan = false;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log("Set Vegan Menu");
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log("One of them is Vegan,Make Arrangements");
} else {
  console.log("No Vegan Arrangements Needed");
}

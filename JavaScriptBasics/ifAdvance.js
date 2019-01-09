let isAccountLocked = false; //true
let userRole = "admin";
// if (isAccountLocked) {
//   console.log("Is Account Locked");
// } else {
//   console.log("Welcome");
// }

if (isAccountLocked) {
  console.log("Account Locked");
} else if (userRole === "admin") {
  console.log("Welcome Admin");
} else {
  console.log("Welcome");
}

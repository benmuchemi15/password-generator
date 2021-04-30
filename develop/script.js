// Assignment code here

// prompts for password
var charCount = window.prompt("How many characters would you like your password?");


var upperLetter = window.prompt("Would you like an uppercase letter?");


var lowerLetter = window.prompt("Would you like a lower case letter");


var number = window.prompt("Would you like a number?");


var symbols = window.prompt("Would you like a symbol?");

window.alert("Click the generate button below to generate a password");

function passwordInitiate() {
    window.alert("Click the Generate Button to generate your password!")
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
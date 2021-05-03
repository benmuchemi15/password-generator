// Assignment code here

// prompts for password
var charCount = window.prompt("How many characters would you like your password?");
    if (charCount < 8 || charCount > 128) {
        window.alert("Your password has to be between 8 and 128 characters");
    }
    else {
        var upperLetter = window.prompt("Would you like an uppercase letter?");
        var lowerLetter = window.prompt("Would you like a lower case letter");
        var number = window.prompt("Would you like a number?");
        var symbols = window.prompt("Would you like a symbol?");
    for(i =0; i<passwordLength; i++){
      var randomNumber = Math.floor(Math.random() * chars.length);
      passwords+= chars.substring(randomNumber,randomNumber+1);
  }
}

window.alert("Click the generate button below to generate a password");

function upperLetter() {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (upperLetter = upper) {
        return Math.floor(math.random() * 26);
    }
}

function lowerLetter() {
    var lower = "abcdefghijklmnopqrstuvwxyz";
}

function number() {
    var num = "0123456789";
}

function symbols() {
    var sym = "!@#$%^&*_-+=/?";
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
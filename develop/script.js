// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//goal: when called, return one upper that is random
function generateUpperString() {
    const upperOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomUpper = upperOptions.split('')[(Math.floor(Math.random() * 26))];
    console.log("randomUpper: " + randomUpper);
    return randomUpper;
}

//goal: when called, return one lower that is random
function generateLowerString() {
    const lowerOptions = "abcdefghijklmnopqrstuvwxyz";
    const randomLower = lowerOptions.split('')[(Math.floor(Math.random() * 26))];
    console.log("randomLower: " + randomLower);
    return randomLower;
}

//goal: when called, return one number that is random
function generateNumberString() {
    const numberOptions = "0123456789";
    const randomNumber = numberOptions.split('')[(Math.floor(Math.random() * 10))];
    console.log("randomNumber: " + randomNumber);
    return randomNumber;
}

//goal: when called, return one symbol that is random
function generateSymbolString() {
    const symbolOptions = "!@#$%^&*_-+=/?";
    const randomSymbol = symbolOptions.split('')[(Math.floor(Math.random() * 14))];
    console.log("randomSymbol: " + randomSymbol);
    return randomSymbol;
}

// length: int, hasUpper-hasSymbol: boolean
//
function generatePassword(length, hasUpper, hasLower, hasNumber, hasSymbol) {
    console.log('length: ' + length);
    console.log('hasUpper: ' + hasUpper);
    console.log('hasLower: ' + hasLower);
    console.log('hasNumber: ' + hasNumber);
    console.log('hasSymbol: ' + hasSymbol);

    let howManyCharactersToGenerate = length;
    let password = "";
    let arrayOfGeneratorFunctions = [];

    if (hasUpper) {
        console.log('upper func added');
        arrayOfGeneratorFunctions.push(generateUpperString());
    }
    if (hasLower) {
        console.log('lower func added');
        arrayOfGeneratorFunctions.push(generateLowerString());
    }
    if (hasNumber) {
        console.log('number func added');
        arrayOfGeneratorFunctions.push(generateNumberString());
    }
    if (hasSymbol) {
        console.log('symbol func added');
        arrayOfGeneratorFunctions.push(generateSymbolString());
    }

    console.log("arrayOfGenratorFunctions: " + arrayOfGeneratorFunctions);

    while (howManyCharactersToGenerate > 0) {
        let generatedCharacter = arrayOfGeneratorFunctions[Math.floor(Math.random() * arrayOfGeneratorFunctions.length)];
        
        password += generatedCharacter;

        howManyCharactersToGenerate -= 1;
    }
    
    return password;
}

// prompts for password
let charCount = window.prompt("How many characters would you like your password?");

if (charCount < 8 || charCount > 128) {
    window.alert("Your password has to be between 8 and 128 characters");
}
var upperLetter = confirm("Would you like an uppercase letter?");
var lowerLetter = confirm("Would you like a lower case letter");
var number = confirm("Would you like a number?");
var symbols = confirm("Would you like a symbol?");
    
window.alert("Click the generate button below to generate a password");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(charCount, upperLetter, lowerLetter, number, symbols);
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
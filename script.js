// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  prompt('How many characters would you like your password to have?');
  prompt('Password should contain Uppercase Letters');
  prompt('Password should contain Lowercase Letters');
  prompt('Password should contain Numeric Characters');

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

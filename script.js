// Assignment Code
var generateBtn = document.querySelector("#generate");

var NumberofCharacters = 22;
var UpperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var LowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var Symbols = ['!','@','#','$','%','^','&','*','(',')','=','+','?','-','/','<','>','[',']','{','}' ]
var Numbers = ['0','1','2','3','4','5','6','7','8','9']



function generatePassword() {
prompt('How many characters would you like your password to have?')

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function customPrompts() {

}

prompt('Password will contain Uppercase letters');
prompt('Password will contain Lowercase letters');
prompt('Password will contain Numbers');
prompt('Password will contain Symbols');
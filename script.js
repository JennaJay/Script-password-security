// Assignment Code
var generateBtn = document.querySelector("#generate");

var userSelections = [];
var numberofCharacters = 22;
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var symbols = ['!','@','#','$','%','^','&','*','(',')','=','+','?','-','/','<','>','[',']','{','}' ];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];


function generatePassword() {

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
  numberofCharacters = Prompt("How many characters would you like your password to have?");
  if(numberofCharacters < 8 || numberofCharacters > 128) {
  alert('Password must contain between 8 and 128 characters');
  return false;
}

if (confirm('I want uppercase letters in my password')); {
  userSelections = userSelections.concat(upperCase);
}

if (confirm('I want lowercase letters in my password')); {
  userSelections = userSelections.concat(lowerCase);
}

if (confirm('I want symbols in my password')); {
  userSelections = userSelections.concat(symbols);
}

if (confirm('I want numbers in my password')); {
  userSelections = userSelections.concat(numbers);
}
}
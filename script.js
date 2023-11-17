// Assignment Code
var generateBtn = document.querySelector("#generate");

var userSelectbox = [];
var myupperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var mylowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var mySymbols = ['!','@','#','$','%','^','&','*','(',')','=','+','?','-','/','<','>','[',']','{','}' ];
var myNumbers = ['0','1','2','3','4','5','6','7','8','9'];



function generatePassword() {

  var numberofCharacters = prompt("How many characters would you like your password to have?");
  if(numberofCharacters < 8 || numberofCharacters > 128);

}
  


(confirm('I want uppercase letters in my password')); {
  userSelectbox = userSelectbox.concat(myupperCase);
}

(confirm('I want lowercase letters in my password')); {
 userSelectbox = userSelectbox.concat(mylowerCase);
}

(confirm('I want symbols in my password')); {
  userSelectbox = userSelectbox.concat(mySymbols);
}

(confirm('I want numbers in my password')); {
  userSelectbox = userSelectbox.concat(myNumbers);
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

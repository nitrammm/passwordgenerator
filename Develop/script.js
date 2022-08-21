// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  return Math.floor(Math.random()*(max - min) + min)

}

function getRandomItem(list) {
  return list[randomInt(0, list.length - 1)]
}

function generatePassword() {
    var userInput = window.prompt('How long do you want your password to be?')

    var passwordLength = parseInt(userInput)
  
  if (isNaN(passwordLength)) {
    window.alert("That's not a number!")
    return
  } 

  if (passwordLength < 8 || passwordLength > 128){
    window.alert('Password length must be between 8 and 128 characters')
    return
  }

  var userWantsNumbers = window.confirm('Would you like to include numbers in your password?')
  var userWantsSymbols = window.confirm('Would you like to include symbols in your password?')
  var userWantsUppercase = window.confirm('Would you like to include uppercase letters in your password?')
  var userWantsLowercase = window.confirm('Would you like to include lowercase letters in your password?')

  var numberList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  var symbolList = ['!', '@', '#', '$', '%', '^', '&', '*']
  var lowerCaseList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var upperCaseList = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

  var optionsCart = [numberList]

  if(userWantsNumbers === true) {
    optionsCart.push(numberList)
  }

  if(userWantsSymbols === true) {
  optionsCart.push(symbolList)
}

  if(userWantsLowercase === true) {
    optionsCart.push(lowerCaseList)
  }

  if(userWantsUppercase === true) {
    optionsCart.push(upperCaseList)
  }

  var generatePassword = ''

  for (var i = 0; i < passwordLength; i++){
    var randomItem = optionsCart[randomInt(0, optionsCart.length - 1)]
    var randomList = getRandomItem(optionsCart)
  }

  return generatePassword

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  var characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()";
  var passwordLength = 128;
  var password = '';
 
  for (var i = 8; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random()
    * characters.length);
    console.log(randomNumber)

    password += characters.substring(randomNumber,
      randomNumber + 1);
      console.log(password);
  
  


  passwordText.value = password;

}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");

//Generates Password
function generatePassword(){
  // creates password
  function makePassword(length, charSet){
    password = ""
    for (var i = 0; i < length; i++){
      var randomNum = Math.floor(Math.random() * charSet.length)
      var randomCategory = charSet[randomNum]
      randomNum = Math.floor(Math.random() * randomCategory.length)
      password = password.concat(randomCategory[randomNum])
    }
    return(password)
  }

  var char = []
  var userParameters = []
  var charCategories = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "1234567890", "!@#$%^&*?-"]

  //gets user input of password length
  var userLength = window.prompt("Enter how long you want your password to be (8-128): ")
  userLength = parseInt(userLength)
  console.log(userLength)
  console.log(typeof userLength)
  if (userLength === null){
    return;
  } else if (isNaN(userLength)){
    window.alert("Must enter a NUMBER between 8 and 128 characters")
    return;
  } else if (userLength < 8 || userLength > 128){
    window.alert("Must enter a number between 8 and 128 characters")
    return;
  } 

  //gets user input of character preference
  var includeNames = ["lowercase", "uppercase", "numeric", "special"]
  for (var i = 0; i < 4; i++){
    var userInclude = window.prompt("Click OK if you would like to include " + includeNames[i] + " characters")
    if (userInclude === null){
      userParameters.push(false)
    } else {
      userParameters.push(true)
      char.push(charCategories[i])
    }
  }
  if (userParameters.includes(true) === false){
    window.alert("Must allow at least one character type")
    return;
  }
  console.log(char)
  console.log(userParameters)

  var pass = makePassword(userLength, char)
  console.log(pass)
  return(pass)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

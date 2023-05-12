// Assignment Code
var generateBtn = document.querySelector("#generate");

//Generates Password
function generatePassword(){
  var pass = ""
  var userParameters = []
  var lowercaseChar = "abcdefghijklmnopqrstuvwxyz"
  var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numericChar = "1234567890"
  var specialChar = "!@#$%^&*?-"

  //gets user input of password length
  var userLength = window.prompt("Enter how long you want your password to be (8-128): ")
  userLength = Number(userLength)
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
    }
  }
  if (userParameters.includes(true) === false){
    window.alert("Must allow one character type")
    return;
  }
  console.log(userParameters)

  //creates password
  // for (var i = 0; i < userLength; ){

  // }
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

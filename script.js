// Assignment Code
var generateBtn = document.querySelector("#generate");

//Generates Password
function generatePassword(){

  var userParameters = []
  var userLength = window.prompt("Enter how long you want your password to be (8-128): ")
  console.log(userLength)
  console.log(typeof userLength)
  if (userLength === null){
    return;
  }
  //need to fix error handling for if user enters something other than numbers
  else if (typeof userLength !== "string"){
    window.alert("Must enter a NUMBER between 8 and 128 characters")
    return;
  } else if (userLength < 8 || userLength > 128){
    window.alert("Must enter a number between 8 and 128 characters")
    return;
  } 
  userParameters.push(userLength)

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


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");

//Generates Password
function generatePassword(){
  var userLength = window.prompt("Enter how long you want your password to be (8-128): ")
  console.log(userLength)
  if(userLength === null){
    return;
  } else if(typeof userLength !== "number"){
    window.alert("Must enter a NUMBER between 8 and 128 characters")
    return;
  } else if(userLength < 8 || userLength> 128){
    window.alert("Must enter a number between 8 and 128 characters")
    return;
  } 
  window.prompt("Example")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

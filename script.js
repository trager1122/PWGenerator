// Assignment Code
var generateBtn = document.querySelector("#generate");
var lcLetters= "abcdefghijklmnopqrstuvwxyz";
var capLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers= "0123456789";
var specChars= " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var possChars= "";


// Prompts and validity checks for password criteria
    // Number of Characters Prompt and Criteria Validation
var numChars= prompt("What length of characters would you like your new password? (min of 8 and no more than 128)");
function lengthCheck(numChars){
    if (numChars <= 7 && numChars >= 129){
        numChars= prompt("Invalid entry. What length of characters would you like your new password? ( Remember: minimum of 8 and no more than 128)");
    }
}
numChars=numChars--

    // Inclusion of lowercase letters prompt and validation
var critLcLetters= prompt("Would you like lowercase letters in your new password? (y/n)");
function lcCheck(critLcLetters){
    if (critLcLetters != "y" || critLcLetters != "n"){
        critLcLetters= prompt ("Invalid entry. Would you like lowercase letters in your new password? (y/n)");
        }
}
if (critLcLetters === "y"){
    possChars += lcLetters;
}

    // Inclusion of capital letters prompt and validation
var critCapLetters= prompt("Would you like capital letters in your new password? (y/n)");
function capCheck(critCapLetters){
    if (critCapLetters != "y" || critCapLetters != "n"){
        critCapLetters= prompt ("Invalid entry. Would you like lowercase letters in your new password? (y/n)");
        }
}
if (critCapLetters === "y"){
    possChars += capLetters;
}

    // Inclusion of numbers prompt and validation
var critNumbers=prompt("Would you like numbers in your new password? (y/n)");
function numCheck(critNumbers){
    if (critNumbers != "y" || critNumbers != "n"){
        critNumbers= prompt ("Invalid entry. Would you like lowercase letters in your new password? (y/n)");
        }
}
if (critNumbers= "y"){
    possChars += numbers
}

var critSpecChars=prompt("Would you like to include special characters such as !, ?, # in your new password? (y/n)");
function scCheck(critSpecChars){
    if (critSpecChars != "y" || critSpecCharsumbers != "n"){
        critSpecChars= prompt ("Invalid entry. Would you like lowercase letters in your new password? (y/n)");
        }
}
if (critNumbers= "y"){
    possChars += specChars
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
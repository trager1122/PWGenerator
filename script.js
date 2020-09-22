// Assignment Code
var generateBtn = document.querySelector("#generate");
var lcLetters= "abcdefghijklmnopqrstuvwxyz";
var capLetters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers= "0123456789";
var specChars= "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

function generatePassword(){
   
    var possible= "";
    var pwGen = "";

    // Number of Characters Prompt and Criteria Validation Function
    
    var length = parseInt(prompt ("What length of characters would you like your new password? (min of 8 and no more than 128)"));
    while (length < 8 || length > 128){
            length = prompt("Invalid entry. What length of characters would you like your new password? ( Remember: minimum of 8 and no more than 128)");
        }
    
    // Inclusion of lowercase letters prompt and validation
    var critLcLetters= prompt("Would you like lowercase letters in your new password? (y/n)");
    while (critLcLetters !== "y" && critLcLetters !== "n"){
        critLcLetters = prompt("Invalid entry. Would you like lowercase letters in your new password? (y/n)");
    }
    if (critLcLetters === "y"){
        possible += lcLetters;
    }

    // Inclusion of capital letters prompt and validation
    var critCapLetters= prompt("Would you like capital letters in your new password? (y/n)");
    while (critCapLetters !== "y" && critCapLetters !== "n"){
      critCapLetters= prompt("Invalid entry. Would you like capital letters in your new password? (y/n)");
    }
    if (critCapLetters === "y"){
        possible += capLetters;
    }

    // Inclusion of numbers prompt and validation
    var critNumbers=prompt("Would you like numbers in your new password? (y/n)");
    while (critNumbers !== "y" && critNumbers !== "n"){
        critNumbers=prompt("Invalid entry.  Would you like numbers in your new password? (y/n)")
       }
    if (critNumbers === "y"){
        possible += numbers;
    }

    //Inclusion of special characters prompt and validation
    var critSpecChars=prompt("Would you like to include special characters such as !, ?, # in your new password? (y/n)");
    while (critSpecChars !== "y" && critSpecChars !== "n"){
        critSpecChars=prompt ("Invalid entry. Would you like to include special characters in your new password? (y/n)");
       }       
    if (critSpecChars === "y"){
        possible += specChars;
    }   

    // Password Randomization
    for (var i = 0; i < length; i++){
        pwGen += possible.charAt(Math.floor(Math.random() * possible.length));
        }
    return pwGen;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
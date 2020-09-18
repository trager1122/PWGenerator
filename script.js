// Assignment Code
var generateBtn = document.querySelector("#generate");
var lcLetters= "abcdefghijklmnopqrstuvwxyz";
var capLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers= "0123456789";
var specChars= " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var possChars= "";

function generatePassword(lcLetters, capLetters, numbers, specChars, possChars){
    // Number of Characters Prompt and Criteria Validation
    var numChars= prompt("What length of characters would you like your new password? (min of 8 and no more than 128)");
    if (numChars <= 7 && numChars >= 129){
        numChars= prompt("Invalid entry. What length of characters would you like your new password? ( Remember: minimum of 8 and no more than 128)");
        }
    console.log(numChars);

    // Inclusion of lowercase letters prompt and validation
    var critLcLetters= prompt("Would you like lowercase letters in your new password? (y/n)");
    if (critLcLetters != 'y' && critLcLetters != 'n'){
        critLcLetters= prompt ("Invalid entry. Would you like lowercase letters in your new password? (y/n)");
        }
    else if (critLcLetters === 'y'){
        {possChars += lcLetters;}
    }
    console.log(possChars);

    // Inclusion of capital letters prompt and validation
    var critCapLetters= prompt("Would you like capital letters in your new password? (y/n)");
    if (critCapLetters != 'y' && critCapLetters != 'n'){
        critCapLetters= prompt ("Invalid entry. Would you like capital letters in your new password? (y/n)");
        }
    else if (critCapLetters === 'y'){
        possChars += capLetters;
    }
    console.log(possChars);

    // Inclusion of numbers prompt and validation
    var critNumbers=prompt("Would you like numbers in your new password? (y/n)");
    if (critNumbers != 'y' && critNumbers != 'n'){
        critNumbers= prompt ("Invalid entry. Would you like numbers in your new password? (y/n)");
        }
    else if (critNumbers=== 'y'){
        possChars += numbers;
    }
    console.log(possChars);

    var critSpecChars=prompt("Would you like to include special characters such as !, ?, # in your new password? (y/n)");
    if (critSpecChars != 'y' || critSpecCharsumbers != 'n'){
        critSpecChars= prompt ("Invalid entry. Would you like to include special characters in your new password? (y/n)");
        }
    else if (critNumbers=== 'y'){
        possChars += specChars;
    }
    console.log(possChars);

    // Password Randomization
    var pwGen = "";
    for (var i = 0; i < 5; i++)
    pwGen += possChars.charAt(Math.floor(Math.random() * possible.length));
    console.log (pwGen);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
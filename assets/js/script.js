// Assignment code here
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "{", "}", "|", ";", ":", "'", "<", ">", "?", ",", "."];
var allCharacters = []; // creates a blank array, which is filled in depending on the user answers
var userPassword = "";

var lowercase;
var uppercase;
var numeric;
var special;
var characterLength;

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;

    function generatePassword() {
        var userPassword = "";

        // Prompts the user to choose a password with a specific character range. If outside of the range, alert message and return to prompt.
        function passwordLength() {
            characterLength = prompt("Choose a password between 8 and 128 characters.");
            
            if (characterLength < 8 || characterLength > 128) {
                alert("Your password must be between 8 and 128 characters!");
                passwordLength();
            }
        }
        passwordLength()

        // Prompts user to select boolean for lowercase, uppercase, numeric, and special characters. If none are chosen, displays alert and resest to first window box.
        function userChoice() {
            lowercase = confirm("Do you want to include lowercase characters in your password?");
            uppercase = confirm("Do you want to include uppercase characters in your password?");
            numeric = confirm("Do you want to include numeric characters in your password?");
            special = confirm("Do you want to include special characters in your password?");

            if (lowercase == false && uppercase == false && numeric == false && special == false) {
                alert("You must select AT LEAST one character type");
                userChoice();
            }
        }
        userChoice()

        // evaluates which choices were made in the userChoice function above and concatonates the characters into the allCharacters variable.

        if (lowercase === true) {
            allCharacters = allCharacters.concat(lowercaseCharacters);
        }

        if (uppercase === true) {
            allCharacters = allCharacters.concat(uppercaseCharacters);
        }

        if (numeric === true) {
            allCharacters = allCharacters.concat(numericCharacters);
        }

        if (special === true) {
            allCharacters = allCharacters.concat(specialCharacters);
        }

        // creates a randomly generated password based on input length and characters selected from the array loops above.
        for (var i = 0; i < characterLength; i++) {
            userPassword += allCharacters[Math.floor(Math.random() * (allCharacters.length))];
        }

        return userPassword;
    }
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
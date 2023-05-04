// Assignment code here
let lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numericCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let specialCharacters = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "{", "}", "|", ";", ":", "'", "<", ">", "?", ",", "."];
let allCharacters = [];
let userPassword = "";

let lowercase;
let uppercase;
let numeric;
let special;
let passwordLength;

// Write password to the #password input
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");
  
    passwordText.value = password;

    function generatePassword() {
        let userPassword = "";

        // Prompts the user to choose a password with a specific character range. If outside of the range, alert message and return to prompt.
        function passwordLength() {
            passwordLength = prompt("Choose a password between 8 and 128 characters.");
            
            if (passwordLength < 8 || passwordLength > 128) {
                alert("Your password must be between 8 and 128 characters!");
                passwordLength();
            }
        }
        passwordLength()

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

        for (let i = 0; i < passwordLength; i++) {
            userPassword += allCharacters[Math.floor(Math.random() * (allCharacters.length))];
        }

        return userPassword;
    }
}


// Get references to the #generate element
let generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
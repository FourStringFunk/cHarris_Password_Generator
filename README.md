# cHarris_Password_Generator
A random password generator that creates a strong password for increased security.

## PROJECT DESCRIPTION
This week's Challenge required me to create an application that an employee can use to generate a random password based on criteria they've selected. The application should run in the browser and feature dynamically updated HTML and CSS powered by JavaScript code that I wrote. It has a clean and polished user interface that is responsive to multiple screen sizes.

## USER STORY
- **AS AN** employee with access to sensitive data
- **I WANT** to randomly generate a password that meets certain criteria
- **SO THAT** I can create a strong password that provides greater security

## ACCESSIBILITY CRITERIA
**GIVEN** I need a new, secure password
- **WHEN** I click the button to generate a password
    - **THEN** I am presented with a series of prompts for password criteria
- **WHEN** prompted for password criteria
    - **THEN** I select which criteria to include in the password
- **WHEN** prompted for the length of the password
    - **THEN** I choose a length of at least 8 characters and no more than 128 characters
- **WHEN** asked for character types to include in the password
    - **THEN** I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
- **WHEN** I answer each prompt
    - **THEN** my input should be validated and at least one character type should be selected
- **WHEN** all prompts are answered
    - **THEN** a password is generated that matches the selected criteria
- **WHEN** the password is generated
    - **THEN** the password is either displayed in an alert or written to the page

## USAGE

[Entrance](https://raw.githubusercontent.com/FourStringFunk/cHarris_Password_Generator/main/assets/Images/EntranceExample.png)
![Entrance_Example](https://raw.githubusercontent.com/FourStringFunk/cHarris_Password_Generator/main/assets/Images/EntranceExample.png)

- **ON CLICK** a window prompt displays asking the user to define the length of their password. If the length is less than 8 or more than 128, they receive a prompt redirecting them to enter a new value within the defined range.

[Prompt](https://raw.githubusercontent.com/FourStringFunk/cHarris_Password_Generator/main/assets/Images/Prompt%20Example.png)
![Prompt_Example](https://raw.githubusercontent.com/FourStringFunk/cHarris_Password_Generator/main/assets/Images/Prompt%20Example.png)

- **ON OK** the user is then asked to define the alphanumeric and special character values they want to include in their password. If they don't select at least one, the prompts are reset.

- **ON SUBMIT OF FINAL PROMPT** the randomly generated password is shown in the display box.

[Password](https://raw.githubusercontent.com/FourStringFunk/cHarris_Password_Generator/main/assets/Images/PasswordExample.png)
![Password_Example](https://raw.githubusercontent.com/FourStringFunk/cHarris_Password_Generator/main/assets/Images/PasswordExample.png)

### GITHUB REPO
- [GITHUB_REPO](https://github.com/FourStringFunk/cHarris_Password_Generator)

### LIVE SITE
- [LIVE_SITE](https://fourstringfunk.github.io/cHarris_Password_Generator/)

## CREDITS
N/A

## LICENSE
N/A

## CONTRIBUTIONS
N/A

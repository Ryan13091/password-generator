// Assignment Code for DOM Elements
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector('#password')

//Need Event Listener in Order to Make the Click Event Work
generateBtn.addEventListener('click', generatePassword)

//Create Variable to Verify if Password Length is Correct and How Long
var passwLength = function () {
    var length = prompt("How many characters do you want in your password?  Please choose between 8 and 128 characters");
    if (length < 8 || length > 128) {
        alert("Not a valid option. Please try again.")
        passwLength();
        return length;
    } else {
        console.log(length);
        return length;

    }
}
var enteredPasswordLength = passwLength();

//Ask Users What Type of Characters they want in their generated password:
var upper = confirm("Click OK to include uppercase letters?")
var lower = confirm("Click OK to include lowercase letters?")
var numbers = confirm("Click OK to include numbers?")
var specials = confirm("Click OK to include special characters?")

//Create Arrays for Characters to be stored to test against Password Input Field
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerChars = 'abcdefghijklmnopqrstuvwxyz'
var specialChars = '+,-./:;<=>?@[\\]!"#$%&\'()*^_`{|}~'
var numChars = '0123456789'

//Insert "if" condition to verify that the user wants each type of character

var charConfirm = "";
if (upper) {
    charConfirm += upperChars;
}
if (lower) {
    charConfirm += lowerChars;
}
if (numbers) {
    charConfirm += numChars;
}
if (specials) {
    charConfirm += specialChars;
}

console.log(charConfirm);

// Create a random list of qualified characters the user decided on
function generatePassword() {

    var randomString = "";
    for (var i = 0; i < enteredPasswordLength; i++) {
        randomString += charConfirm.charAt(Math.floor(Math.random() * charConfirm.length));
    }
    return randomString;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

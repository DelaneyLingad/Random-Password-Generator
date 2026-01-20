const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"0","1","2","3","4","5","6","7","8","9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
"{","[","}","]",",","|",":",";","<",">",".","?","/"];

// toggle checkboxes
const specialCheckbox = document.getElementById("special-characters-checkbox")
const numbersCheckbox = document.getElementById("numbers-checkbox")

// generate the passwords
let passwordOneEl = document.getElementById("password-1-el")
let passwordTwoEl = document.getElementById("password-2-el")

function generatePasswords() {
    let allowedCharacters = []
    
    // letters always included
    characters.forEach(char => {
        if (/[a-zA-Z]/.test(char)) { // check if character is an uppercase or lowercase letter
            allowedCharacters.push(char)
        }
    })
    
    // numbers
    if (numbersCheckbox.checked) {
        characters.forEach(char => {
            if (/\d/.test(char)) { // check if character is a digit
                allowedCharacters.push(char)
            }
        })
    }
    
    // special characters
    if (specialCheckbox.checked) {
        characters.forEach(char => {
            if (/[^a-zA-Z0-9]/.test(char)) {
                allowedCharacters.push(char);
            }
        })
    }

    let passwordLength = Number(document.getElementById("password-length-input").value) || 16
    if (passwordLength > 64) passwordLength = 64; // max 64 characters
    
    let passwordOne = ""
    let passwordTwo = ""
    for (let i = 0; i < passwordLength; i++) {
        passwordOne += allowedCharacters[Math.floor(Math.random()*allowedCharacters.length)]
        passwordTwo += allowedCharacters[Math.floor(Math.random()*allowedCharacters.length)]
    }
    passwordOneEl.textContent = passwordOne
    passwordTwoEl.textContent = passwordTwo
}

// copy password to clipboard
function copyToClipboard(elementId) {
    const text = document.getElementById(elementId).textContent;
    if (!text) return;
    
    navigator.clipboard.writeText(text)
        .then(() => {
            alert("Copied to clipboard");
        })
        .catch(() => {
            fallbackCopy(text);
        })
}

// fallback for old browsers
function fallbackCopy(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
}
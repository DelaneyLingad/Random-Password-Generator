const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"0","1","2","3","4","5","6","7","8","9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
"{","[","}","]",",","|",":",";","<",">",".","?","/"];


// generate the passwords
let passwordOneEl = document.getElementById("password-1-el")
let passwordTwoEl = document.getElementById("password-2-el")

function generatePasswords() {
    let passwordOne = ""
    let passwordTwo = ""
    for (let i = 0; i < 16; i++) {
        passwordOne += characters[Math.floor(Math.random()*characters.length)]
        passwordTwo += characters[Math.floor(Math.random()*characters.length)]
    }
    passwordOneEl.textContent = passwordOne
    passwordTwoEl.textContent = passwordTwo
}

// copy password to clipboard
passwordOneEl.addEventListener("click", () => {
    copyToClipboard(passwordOneEl.textContent)
})
passwordTwoEl.addEventListener("click", () => {
    copyToClipboard(passwordTwoEl.textContent)
})

function copyToClipboard(text) {
    if (!text) return; // don't copy if empty
    navigator.clipboard.writeText(text)
        .then(() => {
            console.log("Copied to clipboard:", text)
        })
        .catch(err => {
            console.error("Failed to copy:", err)
        })
}
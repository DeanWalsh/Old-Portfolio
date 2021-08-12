const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunction = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    if(!password) { return }

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
})

clipboardEl.addEventListener('click', () => {
    clipboardEl.style.backgroundColor="rgb(119, 180, 20)";

})

function btnbg() {
    document.getElementById("clipboard").style.backgroundColor = "rgba(44, 44, 44, 0.80)"; 
  }

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    const typesArray = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])
    const randomTypes = []

    if(typesCount === 0) {
        return 'Choose a checkbox'
    }

    for(let i = 0; i < length; i += typesCount) {
        typesArray.forEach((type) => {
            const functionName = Object.keys(type)[0]
            randomTypes.push(functionName)
        })
    }

    shuffle(randomTypes)
    const shuffledArray = randomTypes
    
    function shuffle(array){
        array.sort(() => Math.random() - 0.5)
    }

    for(let i = 0; i < length; i += typesCount){
        shuffledArray.forEach((type) => {
            const functionName = type
            generatedPassword += randomFunction[functionName]()
        })
    }

    const finalPassword = generatedPassword.slice(0, length)

    return finalPassword
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

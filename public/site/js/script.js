
// Elementos DOM
// DOM elements
const result = document.getElementById('result');
const length = document.getElementById('length');
const uppercase = document.getElementById('upperCase');
const lowercase = document.getElementById('lowerCase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const generate = document.getElementById('generate');


// Gerador de eventos
// Events Generator

generate.addEventListener('click', () =>{
    const lengthValue = length.value;
    const hasLower = lowercase.checked;
    const hasUpper = uppercase.checked;
    const hasNumbers = numbers.checked;
    const hasSymbols = symbols.checked;
    result.innerText = generatePassword(hasLower, hasUpper, hasNumbers, hasSymbols, lengthValue);
})

// Gerador de senha
// Password generator

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';

    const typesCount = lower + upper + number + symbol;

   // console.log(typesCount);

    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item) [0]);

   // console.log(typesArr)

    if (typesCount === 0){
        return null;
    }

    if (length > 30){
        return "A senha deverá ter no máximo 30 carácteres";
    }

    if (length < 3){
        return "A senha deverá ter no minimo 3 carácteres";
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            //console.log(funcName);
            generatedPassword += randomFunc[funcName]();
        });
    }

    return generatedPassword;
}


// Biblioteca

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}


// Funções para gerar carácteres especiais
// Functions to generate special characters

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol(){
    const symbols = '!@#$%¨&*()_-=+{}[]?/<>,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}


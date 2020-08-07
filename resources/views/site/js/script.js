
// Elementos do DOM
const result = document.getElementById('result');
const length = document.getElementById('length');
const uppercase = document.getElementById('upperCase');
const lowercase = document.getElementById('lowerCase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const generate = document.getElementById('generate');


// Coletor de infos de configuração do usuário a partir de clique no botão de gerar nova senha.
generate.addEventListener('click', () =>{
    const lengthValue = length.value;
    const hasLower = lowercase.checked;
    const hasUpper = uppercase.checked;
    const hasNumbers = numbers.checked;
    const hasSymbols = symbols.checked;
    result.innerText = generatePassword(hasLower, hasUpper, hasNumbers, hasSymbols, lengthValue);
})

// Função que irá gerar a senha. Recebe os parametros de configuração do usuário
function generatePassword(lower, upper, number, symbol, length) {
    // Password é iniciado vazio
    let generatedPassword = '';
    // typesCount irá contar o número de critérios selecionados pelo usuário.
    const typesCount = lower + upper + number + symbol;
    // TypesArr irá filtrar itens que estão selecionados pelo usuário e excluir os que não foram
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item) [0]);
    // Caso o usuário não tenha selecionado nenhum critério o algorítimo deverá parar.
    if (typesCount === 0){
        return "Por favor, escolha ao menos um critério.";
    }
    // Caso a senha seja maior que 30 carácteres o algorítimo deverá parar.
    if (length > 30){
        return "A senha deverá ter no máximo 30 carácteres";
    }
    // Caso a senha seja menor que 3 carácteres o algororítimo deverá parar
    if (length < 3){
        return "A senha deverá ter no minimo 3 carácteres";
    }
    // Esse for irá gerar uma senha a partir dos critérios do usuário limitado ao número de carácteres escolhido.
    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }
    //Retorno do algorítimo será a senha.
    return generatedPassword;
}


// Biblioteca
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}


// Funções que irão gerar os carácteres
// Essa função irá trazer as letras maiusculas do conjunto alfanumérico
function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// Essa função irá trazer as letras minusculas do conjunto alfanumérico
function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// Essa função irá trazer os números do conjunto alfanumérico
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// Essa função irá trazer os símbolos do conjunto alfanumérico
function getRandomSymbol(){
    const symbols = '!@#$%¨&*()_-=+{}[]?/<>,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}


/* function expression
// function anonymous
let total = 0

// parâmetros (parameters)
const sum = function(number1, number2){
    total = number1 + number2
    return total
}


let number1 = 34
let number2 = 25
//sum(number1, number2)  arguments = argumentos

// console.log(`o número 1 é ${number1}`)
// console.log(`o número 2 é ${number2}`)
console.log(`a soma é  é ${sum(number1, number2)}`)
console.log(total) */

// Função é um liquidificador

function fazerSuco(fruta1, fruta2) {
    return 'suco de: ' + fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maçã')

console.log(copo)

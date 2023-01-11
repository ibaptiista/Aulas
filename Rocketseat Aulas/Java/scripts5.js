// Manipulando Strings e Números

// Transformar String em Número e Numéro em string

// let string = "123"
// console.log(Number(string))
// let number = 321
// console.log(String(number)) */

// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número

// let word = "Pneumoultramicroscopiosilicovulcanoconiosis"
// console.log(word.length)

// let number = 1234
// console.log(String(number).length) */

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

// let number = 2342342325234.252523425
// console.log(number.toFixed(2).replace(".", ","))

// Transfoem letras minúsculas em maiúsculas. Faça o contrário disso também

// let word = " Programar é muito bacana!"
// console.log(word.toLowerCase())

// Manipulando Strings e Array
// Separe um texto que contem espaço, em um novo array onde cada texto é uma posição do array. depois disso, transfrome o array em um texto e onde eram espaços, coloque _

// let phrase = "Eu quero viver o Amor!"
// let myArray = phrase.split(" ")
// let phraseWithUnderscore = myArray.join("_")
// console.log(phraseWithUnderscore)

// Manipulando Strings

// Verificar se o texto contém a palavra Amor

// let phrase = "Eu quero viver o Amor!"
// console.log(phrase.includes("Amor"))

// Manipulando Arryas

// Criar Arrays com construtor

// let myArray = new Array('a', 'b', 'c')
// console.log(myArray)

// Contar elementos de uma array

// console.log(["a", "b", "c"].length)

// Transformar uma cadeia de caracteres em elementos de um array

// let word = "manipulação"
// console.log(Array.from(word))

// Manipulando Arrays

let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("nodejs")
// adicionar no começo
techs.unshift("sql")
// remover do fim
// techs.pop()
// remover do começo
// techs.shift()
// pegar somente alguns elementos do array
// console.log(techs.slice(1, 3))
// remover 1 ou mais itens em qualquer posição do array
// techs.splice(1, 1)
// encontrar a posição de um elemento no array
let index = techs.indexOf('html')
techs.splice(index, 1)

console.log(techs)
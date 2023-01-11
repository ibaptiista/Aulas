/* 
   Operadores unários
   typeof
   delete
*/
const person = {
    name: 'Mayk',
    age: 25,
}
delete person.age

console.log(person)

// Operadores Aritiméticos

// multiplicação *
// console.log(3.2 * 5.5)

// divisão /
// console.log(12 / 2)

// soma +
// console.log(34 + 67)

// subtração -
// console.log(34 - 23)


// resto da divisão %
// let remainder
// remainder = 11 % 9
// console.log(remainder)

// incremento ++
// let increment = 0

// console.log(increment++)
// console.log(increment)

// decremento --
// let decrement = 0
// decrement--
// console.log(decrement)

// exponencial **
// console.log(2 ** 3)

// Operadores de atribuição (Assignment)
let x

// assignment
x = 1

// addition assignment
// x = x +2
x += 2


// subtraction assignment
// x = x - 1
x -= 1


// multiplication assignment
// x = x * 2
x *=2

// division asserts
// x = x / 2
x /=2


// remainder, exponetiation
// x %= 2
x **= 2
console.log(x)

// Operadores lógicos (logical operators)

// - 2 valores booleanos, quando verificado,
// resultará em verdadeiro ou falso

let pao = true
let queijo = false

// AND &&
// console.log(pao && queijo)

// OR ||
// console.log(pao || queijo)

// NOT !
console.log(!pao)

// Operador Condicional (Ternário)

// Dependendo da condição nós receberemos valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

// Exemplos

// Café da manhã top
// let pao = false
// let queijo = false

// const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim'

// console.log(niceBreakfast)

// Maior de 18

// let age = 23

// const canDrive = age >= 18 ? 'can drive' : "can't drive"
// console.log(canDrive)

// Operador de String (String operator)

// comparison (comparação)
// console.log('a' == 'b')

// concatenation (concatenação)
// Retornar a união de duas Strings
let alpha = 'alpha'
alpha += 'bet'
console.log(alpha + 345)

/* 
    Operator precedence / Precedência de operadores
De cima para baixo, do mais importante ao menos importante.

* grouping                      ( )
* negação e incremento          ! ++ --
* multiplicação e divisão       * /
* adição e subtração            + -
* relacional                    < <= > >=
* igualdade                     == != === !==
* AND                           && 
* OR                            ||
* condicional                   ?:
* assignment (atribuição)       = += -= *= %= */

console.log( 3 > 2 && 2 > 1)
/* 

    Function () constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const icaro = new Person("Icaro")
const joao = new Person("João")
console.log(icaro.walk())
console.log(joao.walk())
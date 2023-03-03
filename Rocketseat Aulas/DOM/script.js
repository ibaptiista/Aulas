// getElementById()

// const element = document.getElementById('blog-title')
// console.log(element);

// getElementClassName()

// const element = document.getElementByClassName('one')
// console.log(element);

// getElementByTagName()

// const element = document.getElementsByTagName('body')
// console.log(element);

// querySelector()

// const element = document.querySelector('.one')
// console.log(element);

// querySelectorAll ()

// const elements = document.querySelectorAll('.one')
// console.log(element);

// elements.forEach (el => console.log(el)) 

// Qual usar?

// getElementById (element)
// getElementsByClassName (HTMLCollection)
// getElementByTagName (HTMLCollection)
// querySelector (element)
// querySelectorAll (Nodelists)

// Manipulando conteúdo
// textContent

// const element = document.querySelector('h1')

// element.textContent += " Olá Devs!"

// console.log(element.textContent);

//innerText

// const element = document.querySelector('h1')

// element.innerText = " Olá Devs!"

// innerHtml

// const element = document.querySelector('h1')

// element.innerHTML = " Olá Devs! <small>!!!</small>"

//value

// const element = document.querySelector('input')
// console.log(element.value);
// element.value = "outro elemento"

// atributos

// const header = document.querySelector('header')
// header.setAttribute('id', 'header')

// const headerID = document.querySelector('#header')

// console.log(headerID)

//estilos
// const element = document.querySelector('body')

// element.style.backgroundColor = "#f9f3d2"

//classlist

// const element = document.querySelector('body')

// element.classList.add('active', 'green')
// element.classList.remove('active')
// element.classList.toggle('active')

// parentNode parentElement

// const body = document.querySelector('body')

// console.log(parentNode)

// childNodes children
// const el = document.querySelector('body')
// firstChild firstElementChild
// console.log(el.firstElementChild)
// lastChild lastElementChild

// nextSibling nextElementSibling
// const el = document.querySelector('header')
// console.log(el.nextSibling)

// previousSibling previousElementSibling
// console.log(el.previousSibling)

// creatElement

// const div = document.createElement('div')
// div.innerText = "Olá Devs!"

// append prepend

// const body = document.querySelector('body')

// body.prepend(div)

// const script = body.querySelector('script')

// body.insertBefore(div, script)

// eventos

//mouse
// function print (){
//     console.log('print')
// }

//teclado
// const input = document.querySelector('input')

// input.onkeyup = function() {
//     console.log('rodei')
// }

//mais
// const h1 = document.querySelector('h1');

// h1.addEventListener('click', print)

// function print () {
//     console.log('print')
// }

// const h1 = document.querySelector('h1');

// h1.addEventListener('click', print)

// function print () {
//     console.log('print')
// }

// h1.onclick = function() {
//     console.log('outro momento')
// }

// argumento event

// const input = document.querySelector('input')

// input.onkeydown = function(event) {
//     console.log(event.currentTarget.value)
// }

// exercicio

const buttonOpenModal = document.getElementById('openModal');

const modalWrapper = document.querySelector('.modal-wrapper')

buttonOpenModal.onclick = function(){
    modalWrapper
    .classList
    .remove('invisible')
}

document.addEventListener('keydown', function(event) {
    const isEscKey = event.key === 'Escape'

    if(isEscKey) {
        modalWrapper.classList.add('invisible')
    }
})
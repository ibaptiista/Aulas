// throw

function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatorio'
    }

    console.log(name)
}

// try...catch
try {
    sayMyName(Mayk)

} catch(e){
    console.log(e)
}

console.log('após o try/catch')
let family = {
    incomes: [1500, 1200, 250.5, 300],
    expenses: [300, 100, 200, 1500, 360.5, 800]
}


function sum(array) {
    let total = 0;
    
for(let value of array) {
    total += value
}

    return total
}


function calculateBalance(){
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses
    const itsOk = total >= 0

    let balanceText = "negativo"

    if (itsOk) {
        balanceText = "positivo"
    }
    console.log(`seu saldo é ${balanceText}: ${total.toFixed(2)}`)
}

calculateBalance()




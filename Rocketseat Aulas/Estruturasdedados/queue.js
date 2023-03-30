// Passo 1: Modelnado
class Queue {
    constructor() {
        this.data = [];
    }

    enqueue(value) {
        this.data.push(item);
        console.log(`${item} chegou na fila!`);
    }

    dequeue() {
        const item = this.data.shift();
        console.log(`${item} saiu da fila!`);
    }
}
// Passo 2; Utilização
const fila = new Queue()

fila.enqueue('Mariana')
fila.enqueue('João')
fila.enqueue('Ariel')
fila.dequeue()
fila.dequeue()
fila.dequeue()
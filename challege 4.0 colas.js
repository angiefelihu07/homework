//challege 4.0 colas

class Queue {
    constructor(){
        this.queue = [];
    }

    enqueue(element) {
        this.queue.push(element);
        return this.queue;
    }

    dequeue() {
        return this.queue.shift();
    }

    peek(){
        return this.queue[0];
    }
    size() {
        return this.queue.length;
    }
    isEmpty() {
        return this.queue.length === 0;
    }

    print() {
        return this.queue;
    }
}

const ATM = new Queue();
const persona1 = {
    "nombre":"Carla", 
    "hora": "12:30 AM" };

const persona2 = {
    "nombre": "Mario",
    "hora":"2:15 PM"};

const persona3 = {'nombre': 'Juan',
'hora': '4:20 PM' };

ATM.enqueue(persona1);
ATM.enqueue(persona2);
ATM.enqueue(persona3);
ATM.print();

//A generic class to implement queue data structure?

class Queue<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    //function to check if queue is empty
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    //function to insert an element in queue
    enqueue(item: T): void {
        this.items.push(item);
    }

    //function to delete an element in queue
    dequeue(): T | undefined {
        if (!this.isEmpty()) {
            return this.items.shift();
        } else {
            console.log("Queue is empty. Cannot dequeue.");
            return undefined;
        }
    }

    //function to check the size of a queue
    size(): number {
        return this.items.length;
    }
}

// Example usage:
const myQueue = new Queue<number>();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

console.log("Queue size:", myQueue.size());

while (!myQueue.isEmpty()) {
    console.log("Dequeued:", myQueue.dequeue());
}

console.log("Queue size after dequeue:", myQueue.size());

//A generic function to work only with that types that have charAtMethod in it?
interface WithCharAt {
    charAt(index: number): string;
}

function exampleFunction<T extends WithCharAt>(value: T): void {
    console.log(value.charAt(0));
}

// Example usage:
class Example implements WithCharAt {
    constructor(private data: string) { }

    charAt(index: number): string {
        return this.data.charAt(index);
    }
}

const exampleInstance = new Example("Hello, World!");

exampleFunction(exampleInstance);


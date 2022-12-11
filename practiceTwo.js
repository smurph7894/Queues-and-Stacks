class SLNode {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SLQueue {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size=0;
    }

    enqueue(val) {
        const newNode = new SLNode(val);
        if (this.head === null){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size = this.size + 1;
        return this.size;
    }

    front(){
        return this.head.val;
    }

    isEmpty (){
        return this.head === null;
    }

    dequeue(){
        if (!this.head) {
            return null;
        }
        const value = this.head;
        if (this.head === this.tail){
            this.tail = null;
        }
        this.head = this.tail.next;
        this.size = this.size -1;
        return value.val;
    }

    contains(val){
        let length = this.size -1;
        let node = this.head;
        for (let i = 0; i < length; i++){
            if(node.val === val){
                return true;
            }
            node = node.next;
            return false;
        }
    }

    sizeOfQueue(){
        return this.size;
    }

}

function isEqual(queue1, queue2){
    // if queue sizes are not equal return false first step
    // if queue sizes are equal compare 
        //iterate through, return node values & compare, continue if the same, break loop if not
            // if equal return queues
    if(queue1.size != queue2.size) {
        return false;
    }
    //iterate through both lists, return values and compare
    const length = queue1.size ;
    let node1 = queue1.head;
    let node2 = queue2.head;
    for (let i = 0; i<length; i++ ) {
        let value1 = node1.val;
        // console.log(value1);
        let value2 = node2.val;
        // console.log(value2);
        if (value1 != value2){
            return false;
        }
        node1 = node1.next;
        node2 = node2.next;
    }
    return [queue1, queue2];
}

function removeMinimum(){
    
}

queueOne = new SLQueue();

queueOne.enqueue(1);
queueOne.enqueue(2);
queueOne.enqueue(3);
queueOne.enqueue(4);
queueOne.enqueue(5);
queueOne.enqueue(6);

queueTwo = new SLQueue();

queueTwo.enqueue(1);
queueTwo.enqueue(2);
queueTwo.enqueue(3);
queueTwo.enqueue(4);
queueTwo.enqueue(5);
queueTwo.enqueue(6);


// console.log(queueOne);
// console.log("front", queueOne.front());
// console.log("isEmpty", queueOne.isEmpty());
// console.log("queue two", queueTwo);
// isEqual(queueOne, queueTwo);
// console.log(isEqual(queueOne, queueTwo));
// console.log(queueOne.dequeue());
// console.log(queueOne.contains(11));
// console.log(queueOne.sizeOfQueue());



// Queues Basic
// SLQueue: Enqueue
// Create SLQueue method enqueue(val) to add the given value to the end of our queue. 
// Remember, SLQueue uses a singly linked list (not an array).

// SLQueue: Front
// Create SLQueue method front() to return the value at front of our queue, without removing it.

// SLQueue: Is Empty
// Create SLQueue method isEmpty() that returns whether our queue contains no values.

// SLQueue: Compare Queues
// Given two SLQueue objects, create a standalone function that returns whether they are equal. 
// Queues are equal only if they have equal elements in identical order. Allocate no other object, 
// and return the queues in their original condition upon exit.

// SLQueue: Dequeue
// Create SLQueue method dequeue() to remove and return value at front of the queue. Remember, 
// SLQueue uses singly linked list (not array).

// SLQueue: Contains
// Create method contains(val) to return whether given value is found in our queue.

// SLQueue: Size
// Create SLQueue method size() that returns the number of values in our queue.

// SLQueue: Remove Minimums
// Create a standalone function to remove an SLQueue’s lowest value, otherwise leaving values in the 
// same sequence. Use only local variables; allocate no other objects. Remove all duplicates of this value.
// ***** Bonus: Remove only the last minimum value. Convert [7,2,5,2,4] to [7,2,5,4].


// SLQueue: Interleave Queue
// Reorder SLQueue values to alternate first half values with second-half values, in order. 
// For example: (1,2,3,4,5) becomes (1,4,2,5,3). You may create one additional SLQueue if needed.
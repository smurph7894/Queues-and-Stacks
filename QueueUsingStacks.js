// //no class
// // MyQueue is like the constructor in a class
// var MyQueue = () => {
// };

// //adds a function to the MyQueue (like adding a function within a class)
// MyQueue.prototype.push = (x) => {
// };

// MyQueue.prototype.pop = () => {
// };

class MyQueue {
    constructor() {
        this.pushStack = [];
        this.popStack = [];
    }

    push(val){
        return this.pushStack.push(val);
    }

    pop(){
        if(this.popStack.length === 0){
            while(this.pushStack.length != 0){
                let holdValue = this.pushStack.pop();
                this.popStack.push(holdValue);
            }
        }
        let value = this.popStack.pop();
        return value;
    }

    peek(){
        let index;
        if(this.popStack.length != 0 ){
            index = this.popStack.length-1;
            return this.popStack[index];
        }
        return this.pushStack[0];
    }

    isEmpty(){
        if( this.popStack.length === 0 && this.pushStack.length === 0){
            return true;
        }
        return false;
    }
}

const queueOne = new MyQueue();
const queueTwo = new MyQueue();

console.log(queueOne.push(1));
console.log(queueOne.push(2));
// console.log(queueOne);
// console.log(queueOne.pop());
// console.log(queueOne.peek());
console.log(queueOne);
console.log(queueOne.isEmpty());
console.log(queueTwo.isEmpty());
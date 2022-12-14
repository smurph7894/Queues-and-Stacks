class stack {

    constructor () {
        this.stack = [];
    }
    // Stack Implementation Based on Array
    // Build essential methods push, pop, top, contains, isEmpty, size for ArrStack using an array. Make sure you 
    // designate the underlying array as private (declared var), not public (attached to this).

    // ArrStack: Push
    // Create push(val) that adds val to our stack.
    push (val){
        this.stack.push(val);
    }
    
    // ArrStack: Top
    // Return (not remove) the stack’s top value. 
    top(){
        let topVal = this.stack.length-1;
        return this.stack[topVal];
    }

    // ArrStack: Is Empty
    // Return whether the stack is empty.
    isEmpty(){
        if(this.stack.length === 0){
            return false;
        }
        return true;
    }

    // ArrStack: Pop
    // Create pop() to remove and return the top val.
    pop(){
        if(this.stack.length === 0){
            return false;
        }
        return this.stack.pop();
    }

    // ArrStack: Contains
    // Return whether given val is within the stack.
    contains(val){
        let length = this.stack.length - 1;
        // console.log("length", length);
        for(let i=0; i <= length; i++){
            let value = this.stack[i];
            // console.log(value);
            if(value === val){
                return true;
            }
        }
        return false;
    }

    // ArrStack: Size
    // Return the number of stacked values.  
    size(){
        return this.stack.length;
    }

    display(){
        let length = this.stack.length;
        let currentStack = "";
        for(let i=0; i<length; i++){
            if(i != 0){
                currentStack = currentStack + ", ";
            }
            let indexValue = this.stack[i];
            currentStack = currentStack + indexValue;
        }
        return console.log(currentStack);
    }

}

const stackOne = new stack();

stackOne.push(1);
stackOne.push(2);
stackOne.push(3);
stackOne.push(4);
stackOne.push(5);

// console.log(stackOne);
// console.log(stackOne.top());
// console.log(stackOne.isEmpty());
// console.log(stackOne.pop());
// console.log(stackOne);
// console.log(stackOne.contains(2));
// console.log(stackOne.size());
// stackOne.display();
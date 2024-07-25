class Stack {
    constructor() {
        this.items = [];
    }
    push(items) {
        if (Array.isArray(items)) {
           //Checks array as input, then checks each item if it is a string, before pushing it
            items.forEach(item => {
                if (typeof item === 'string') {
                    this.items.push(item);
                }
            });
        } 
        //Checks the array itself if it is a string, so it can push it (Helpful for single-itemed arrays)
        else if (typeof items === 'string') {
            this.items.push(items);
        } 
        //Otherwise, then the values entered may not be classified as a string
        else {
            console.log('Not a string');
        }
    }
    pop() {
        //Stack is empty if the array is empty, then removing + returning the first item of the stack otherwise
        return this.items.length === 0 ? console.log('Stack is currently empty.'): this.items.pop();
    }
    //Checking the list of items
    check() {
        console.log(this.items);
    }
}

const stack = new Stack();
stack.push("Milk");
stack.push("Eggs");
stack.check();  // ["Milk", "Eggs"]
stack.pop();
stack.check();  // ["Milk"]
stack.pop();
stack.check();  // []
stack.push(["Ice Cream", 10, [], "Cellphone"]);
stack.check();  // ["Ice Cream", "Cellphone"]
stack.pop();
stack.check();  // ["Ice Cream"]
stack.pop();
stack.check();  // []
stack.pop();    // "Stack is currently empty."


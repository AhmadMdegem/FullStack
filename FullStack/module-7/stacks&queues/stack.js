class Stack {

    constructor() {
        this.stack = []
    }
    push(x) {
        this.stack[this.stack.length] = x
    }
    pop() {
        if (!this.isEmpty()) {
            let temp = this.stack[this.stack.length - 1]
            this.stack.length -= 1
            return temp
        }
    }
    peek() {
        if (this.isEmpty())
            return null
        return this.stack[this.stack.length - 1]
    }
    isEmpty() {
        if (this.stack.length)
            return false
        return true
    }
    print() {
        console.log(this.stack);
    }
}

let s = new Stack()
s.push(3)
s.push(4)
s.push(1)
s.push(2)

while (!s.isEmpty()) {
  s.pop()
}
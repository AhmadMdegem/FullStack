
class MinStack {
    constructor() {
        this.stack = []
        this.minStack = []
    }
    push(x) {
        this.stack[this.stack.length] = x
        let temp = this.minStack.peek()
        if (x > temp) {
            console.log('khaled');
        }
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
    getMin() {
        if (this.isEmpty()) {
            this.min = Infinity
            return null
        }
        return this.min
    }
}
let ms = new MinStack()
ms.push(17)
ms.push(12)
ms.push(31)
console.log(ms.getMin())    //12
ms.pop()
ms.pop()
ms.pop()
console.log(ms.getMin())    //null
ms.push(19)
ms.push(21)
console.log(ms.getMin())    //19
ms.push(3)
console.log(ms.getMin())    //3
ms.pop()
ms.pop()
console.log(ms.getMin())    //19
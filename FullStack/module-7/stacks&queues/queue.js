class Queue {
    constructor() {
        this.queue = []
    }
    enqueue(x) {
        this.queue.unshift(x)
    }
    dequeue() {
        if (!this.isEmpty()) {
            let temp = this.queue[this.queue.length - 1]
            this.queue.length -= 1
            return temp
        }
    }
    peek() {
        if (this.isEmpty())
            return null
        return this.stack[this.queue.length - 1]
    }
    isEmpty() {
        if (this.queue.length)
            return false
        return true
    }
    print() {
        console.log(this.queue);
    }

}
let queue = new Queue()
queue.enqueue(4)
queue.enqueue(1)
queue.enqueue(3)

const clearQueue = function (q) {
  return q.peek() ? clearQueue(q.dequeue()) : "Done"
}

clearQueue(queue)
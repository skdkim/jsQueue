const QueueNode = require('./queueNode.js');

class Queue{
  constructor(){
    this.front = new QueueNode();
    this.back = new QueueNode();
  }

  enqueue(ele){
    let item = new QueueNode(ele);
    if (this.isEmpty()){
      this.front = item;
      this.back = item;
    } else {
      this.back.next = item;
      this.back = item;
    }
  }

  dequeue(){
    if (!this.front.data){
      throw new Error("queue is empty");
    }
    let popped = this.front.data;
    this.front = this.front.next;

    return popped;
  }

  getFront(){
    if (this.front.data){
      return this.front.data;
    } else {
      throw new Error("queue is empty");
    }
  }

  isEmpty(){
    return (!this.front.data);
  }
}

module.exports = Queue;

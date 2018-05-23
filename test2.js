let Queue = require('./queue.js');

let que1 = new Queue;
console.log(typeof que1);

console.log("is it empty?");
console.log(que1.isEmpty());

console.log('added one thing');
que1.enqueue(1)
console.log('is it empty');
console.log(que1.isEmpty());

console.log('what is inside?');
console.log(que1.getFront());

console.log('add another');
que1.enqueue("Sdf");

console.log(" what is at the front");
console.log(que1.getFront());

console.log('now dequeue');
que1.dequeue();

console.log('what is at the front');
console.log(que1.getFront());

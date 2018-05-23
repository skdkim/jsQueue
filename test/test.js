let assert = require('assert');

let Queue = require('../queue.js');

describe('#isEmpty()', () => {
  let queue = new Queue();
  it('should return true if the queue is empty', () => {
    assert.equal(queue.isEmpty(), true);
  });

  it('should return false if the queue is not empty', () => {
    queue.enqueue(1);

    assert.equal(queue.isEmpty(), false);
  });
});

describe('#getFront()', () => {
  let queue = new Queue();
  it('should throw an error if queue is empty', () => {
    assert.throws(() => {
      queue.getFront();
    }, /queue is empty/);
  });

  it('should return the front element of the queue', () => {
    queue.enqueue(1);

    assert.equal(queue.getFront(), 1);

    queue.enqueue(2);

    assert.equal(queue.getFront(), 1);
  });
});

describe('#enqueue()', () => {
  let queue = new Queue();
  it('should add argument to the back of the queue', () => {
    queue.enqueue(15);

    queue.enqueue(17);

    queue.dequeue();
    assert.equal(queue.getFront(), 17);
  });
});

describe('#dequeue()', () => {
  let queue = new Queue();
  it('should throw an error if queue is empty', () => {
    assert.throws(() => {
      queue.dequeue();
    }, /queue is empty/);
  });

  it('should remove front element and return the element', () => {
    queue.enqueue(15);
    queue.enqueue(17);
    assert.equal(queue.dequeue(), 15);
  });

  it('front should now be the element after it', ()=> {
    assert.equal(queue.getFront(),17);
  })
});

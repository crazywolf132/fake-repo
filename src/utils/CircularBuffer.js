// Circular buffer implementation to prevent memory leaks
class CircularBuffer {
  constructor(size) {
    this.size = size;
    this.buffer = new Array(size);
    this.pointer = 0;
    this.count = 0;
  }

  push(item) {
    this.buffer[this.pointer] = item;
    this.pointer = (this.pointer + 1) % this.size;
    if (this.count < this.size) {
      this.count++;
    }
  }

  toArray() {
    if (this.count < this.size) {
      return this.buffer.slice(0, this.count);
    }
    return [...this.buffer.slice(this.pointer), ...this.buffer.slice(0, this.pointer)];
  }

  clear() {
    this.buffer = new Array(this.size);
    this.pointer = 0;
    this.count = 0;
  }
}

module.exports = CircularBuffer;
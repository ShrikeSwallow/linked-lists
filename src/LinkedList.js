import Node from "./Node";
export default class LinkedList {
  constructor() {
    this.headNode = null;
    this.tailNode = null;
    this.listSize = 0;
  }
  append = (value) => {
    if (this.listSize === 0) {
      this.headNode = new Node(value);
      this.tailNode = this.headNode;
    } else {
      this.tailNode.nextNode = new Node(value);
      this.tailNode = this.tailNode.nextNode;
    }
    this.listSize += 1;
  };
  prepend = (value) => {
    if (this.listSize === 0) {
      this.headNode = new Node(value);
      this.tailNode = this.headNode;
    } else {
      const temp = new Node(value);
      temp.nextNode = this.headNode;
      this.headNode = temp;
    }
    this.listSize += 1;
  };
  size = () => {
    return this.listSize;
  };
  head = () => {
    return this.headNode.value;
  };
  tail = () => {
    return this.tailNode.value;
  };
  at = (index) => {
    if (index >= 0 && index < this.listSize) {
      let temp = this.headNode;
      let currentIndex = 0;

      while (currentIndex < this.listSize) {
        if (currentIndex === index) {
          return temp.value;
        } else {
          temp = temp.nextNode;
          currentIndex += 1;
        }
      }
    } else {
      return `Index ${index} doesn't exist in this list!`;
    }
  };
  pop = () => {};
  contains = (value) => {};
  find = (value) => {};
  toString = () => {};

  // extra credit methods
  insertAt = (value, index) => {};
  removeAt = (index) => {};
}

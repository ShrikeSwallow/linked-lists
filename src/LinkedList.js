import Node from "./Node";
export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  append = (value) => {
    if (this.size === 0) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      this.tail.nextNode = new Node(value);
      this.tail = this.tail.nextNode;
    }

    this.size += 1;
  };
  prepend = (value) => {};
  at = (index) => {};
  pop = () => {};
  contains = (value) => {};
  find = (value) => {};
  toString = () => {};

  // extra credit methods
  insertAt = (value, index) => {};
  removeAt = (index) => {};
}

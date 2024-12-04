import Node from "./Node";
export default class LinkedList {
  constructor() {
    this.headNode = null;
    this.tailNode = null;
    this.size = 0;
  }
  append = (value) => {
    if (this.size === 0) {
      this.headNode = new Node(value);
      this.tailNode = this.head;
    } else {
      this.tailNode.nextNode = new Node(value);
      this.tailNode = this.tailNode.nextNode;
    }
    this.size += 1;
  };
  prepend = (value) => {
    if (this.size === 0) {
      this.headNode = new Node(value);
      this.tailNode = this.headNode;
    } else {
      const temp = new Node(value);
      temp.nextNode = this.headNode;
      this.headNode = temp;
    }
    this.size += 1;
  };
  head = () => {
    return this.headNode.value;
  };
  tail = () => {
    return this.tailNode.value;
  };
  at = (index) => {};
  pop = () => {};
  contains = (value) => {};
  find = (value) => {};
  toString = () => {};

  // extra credit methods
  insertAt = (value, index) => {};
  removeAt = (index) => {};
}

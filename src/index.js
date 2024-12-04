import "./styles.css";
import LinkedList from "./LinkedList";
import Node from "./Node";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.prepend("lion");

console.log(list.head());
console.log(list);
console.log(list.tail());
console.log(list.size());

console.log(list.at(8));

import "./styles.css";
import LinkedList from "./LinkedList";
import Node from "./Node";

const list = new LinkedList();
console.log(list.tail());

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.prepend("lion");

console.log(list);
console.log(list.head());
console.log(list.tail());
console.log(list.size());
console.log(list.contains("saiyan"));
console.log(list.find("saiyan"));
console.log(list.find("cat"));
list.insertAt("hyena", 9);
console.log(list.size());

console.log(list.toString());

class Node {
constructor (value) {
  this.value = value;
  this.next = null; 
}
delete() {}
}

// const node0 = new Node("salade");
// console.log (node0)
// node0.delete();

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null; 
    this.lenght = 0;
  }

  // rajouter un élément a suite de la tail 

  push (value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head =node;
      this.tail =node;
    } else {
    this.tail.next = node;
    this.tail = node;
    }
    this.lenght++;
    return this
    
  }

  // enlever la head

  shift() {

    if (this.head === null) {
     return undefined;
    } 
    this.head = this.head.next
    this.lenght--;

    if (this.lenght == 0 ) {
      this.tail = null;
      }
    return this
    
  }

  //rajouter un élément a la position head

  unshift(value) {
    const node1 = new Node(value)
    if (this.head === null) {
     this.head = node1;
     this.tail = this.head;
     // this.tail = node;
    } else {
      node1.next = this.head;
      this.head = node1;
    }
    this.lenght++;
    return this
    
  }


  // chercher un élément dans la chaine
  get(index) {

    let current = this.head;

    if (index > this.lenght -1 || index < 0){ 
      return null;
    }
    let counter = 0;
  
    while (counter < index) {
      current = current.next;
      counter++;
    }
    return current;
  }
}

const myList = new SinglyLinkedList();

myList.push("tomate");
myList.push("oignon");

// myList.shift();
myList.unshift();


console.log(myList);

// myList.push("oignon");
// console.log(myList);

// myList.push("chou rouge");
// console.log(myList);


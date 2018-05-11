// linked list implementation

//create new node
function Node(val) {
    this.val = val;
    this.next = null;
}

//linked list
function linkedList() {

    this.front = null;
    this.insert = insert;
    this.deleteNode = deleteNode;
    this.print = print;
}

//insert a node
function insert(data) {
    // Creating a node and initailising 
    // with data 
    var newNode = new Node(data);
    var pointer = this.front;

    // if front is null then node will
    // be added to the list and made front.
    if (this.front == null) {
        this.front = newNode;
    } else {
        //if there is next node then move to next node
        while (pointer.next != null) {
            //move the pointer to the next node
            pointer = pointer.next;
        }
        pointer.next = newNode;
    }

}

//delete a node
function deleteNode(data) {
    var head = this.front;
    var prevNode = this.front;
    var temp = this.front;
    // var currentNode = this.front;
    // var nextNode = currentNode.next;

    // If head node itself holds the key to be deleted
    if (temp != null && temp.val == data) {
        //change head
        head = Object.assign({}, temp.next);
        //delete first node
        delete temp;
        //point the front to the head
        this.front = head;
    }

    // Search for the key to be deleted, keep track of the
    // previous node as we need to change 'prev->next'
    while (temp != null && temp.val != data) {
        prevNode = temp;
        temp = temp.next;
    }

    // If key was not present in linked list
    if (temp == null) {
        console.log("data not found");
    } else {
        // Unlink the node from linked list
        prevNode.next = temp.next;
        this.print();
    }

}

//print the list
function print() {
    var pointer = this.front;
    var list = "";
    while (pointer !== null) {
        list += pointer.val + "-->";
        pointer = pointer.next;
    }
    console.log("List = ", list);
    console.log("//list operations");
    console.log("//list.insert(34)");
    console.log("//list.deleteNode(34)");
}

var list = new linkedList();
list.insert(3);
list.insert(4);
list.insert(5);
list.insert(6);
list.insert(8);
list.print();

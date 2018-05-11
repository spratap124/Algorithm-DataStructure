//create new node
function Node(val) {
    this.val = val;
    this.next = null;
}

//linked list
function linkedList() {

    this.front = null;
    this.insert = insert;
    this.insertNode = insertNode;
}

function insert(data) {
    // Creating a node and initailising 
    // with data 
    var newNode = new Node(data);

    // front is null then node will
    // be added to the list and made front.
    if (this.front == null) {
        this.front = newNode;
    } else {
        this.insertNode(this.front, newNode);
    }
}

function insertNode(node, newNode) {

    //find the last node
    if (node.next == null) {
        node.next = newNode;
    }
    //if there next node then move to next node
    else {
        this.insertNode(node.next, newNode);
    }

}


//initialize the list
var list = new linkedList();

list.insert(2);
list.insert(5);

console.log(list.front);
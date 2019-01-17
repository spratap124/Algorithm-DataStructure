// linked list implementation

// new node constructor
function Node(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
}

//linked list constructor
function linkedList() {

    this.front = null;
    this.insert = insert;
    // this.deleteNode = deleteNode;
    this.print = print;
}

//insert a node
function insert(data) {
    // Creating a node and initailising 
    // with data 
    var newNode = new Node(data);
    

    // if front is null then node will
    // be added to the list and made front.
    if (this.front == null) {
        newNode.next = newNode.prev = newNode;
        this.front = newNode;
    } else {
        //if there are some nodes in list
        var last = this.front.prev;
        last.next = newNode;
        newNode.prev = last;
        newNode.next = this.front;
        this.front.prev = newNode;
    }
    return newNode;
}

// //delete a node
// function deleteNode(data) {
//     var head = this.front;
//     var prevNode = this.front;
//     var temp = this.front;

//     // If head node itself holds the key to be deleted
//     if (temp != null && temp.val == data) {
//         //change head
//         head = temp.next;

//         //point the front to the head
//         this.front = head;
//     }

//     // Search for the key to be deleted, keep track of the
//     // previous node as we need to change 'prev->next'
//     while (temp != null && temp.val != data) {
//         prevNode = temp;
//         temp = temp.next;
//     }

//     // If key was not present in linked list
//     if (temp == null) {
//         console.log("data not found");
//     } else {
//         //if found the key,
//         // Unlink the node from linked list
//         prevNode.next = temp.next;
//         this.print();
//     }

// }

function getNode(val){
    // var ptr = this.front;

    // while(ptr.val != val){
    //     ptr = ptr.next;
    // }

    // return ptr;
    return listHash[val];
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
var listHash = {};

for(var i = 0 ; i<=25; i++){
    listHash[String.fromCharCode(97 + i)] = list.insert(String.fromCharCode(97 + i));
}

console.log("List = ", list);

// list.print();


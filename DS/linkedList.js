/*
* Linked List implementation using js
*/

//create new node
var Node = function(data){
    this.val = data;
    this.next = null;
};

var linkedList = function(dataList){
    //create first node
    var list = new Node(dataList[0]);

    //create a pointer, pointing first node initially
    var pointer = list;

    for(var i = 1; i<dataList.length; i++){
        if(!pointer.next){
            var newNode = new Node(dataList[i]);
            pointer.next = newNode;
            pointer = pointer.next;
        }else{
            pointer = pointer.next;
        }
    }
    return list;
}

var list = linkedList([3,5,8,2,8]);

console.log(list);
//global variables
var inOrderResult = [];
var preOrderResult = [];
var postOrderResult = [];

//new node
function Node(data){
    this.data = data;
    this.left = null;
    this.right = null;
}

//BST
function BST(){
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.postOrder = postOrder;
}

//insert node in BST
function insert(data){
    var newNode = new Node(data);

    //if there is no node in BST
    if(this.root === null){
        this.root = newNode;
    }
    else{
        addNewNode(this.root, newNode);
    }
}

//find correct location and insert the node
function addNewNode(root, newNode){
    
    if (newNode.data < root.data) {    //if data is smaller than root
        if(root.left == null){
            root.left = newNode;
        }else{
            addNewNode(root.left, newNode);
        }
    } else if (newNode.data > root.data){ //if data is greater than root
        if(root.right == null){
            root.right = newNode;
        }else{
            addNewNode(root.right, newNode);
        }
    } 
}


//inorder traversal
function inOrder(){
    var root = this.root;

    printInOrder(root);
}

//print inorder traversal
function printInOrder(root){
    if(root==null){
        return;
    }
    printInOrder(root.left);
    inOrderResult.push(root.data)
    printInOrder(root.right);

}

//preorder traversal
function preOrder(){
    var root = this.root;

    printPreOrder(root);
}

//print preorder traversal
function printPreOrder(root){
    if(root==null){
        return;
    }
    preOrderResult.push(root.data)
    printPreOrder(root.left);
    printPreOrder(root.right);

}

//postorder traversal
function postOrder(){
    var root = this.root;

    printPostOrder(root);
}

//print postorder traversal
function printPostOrder(root){
    if(root==null){
        return;
    }
    printPostOrder(root.left);
    printPostOrder(root.right);
    postOrderResult.push(root.data)

}

var arr = [12,3,7,1,8,2,25,2,27,20,30]

var BST = new BST();

arr.forEach(function(el){
    BST.insert(el);
})

//print BSt
console.log(BST.root);

// Traversals
BST.inOrder();
BST.preOrder();
BST.postOrder();

//print traversal
console.log("inorder",inOrderResult);
console.log("prerder",preOrderResult);
console.log("postorder",postOrderResult);

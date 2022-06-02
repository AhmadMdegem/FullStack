class BSNode {
    constructor(value) {
        this.value = value;
        this.leftChild;
        this.rightChild;
    }
    insertNode(newVal) {
        if (!this.value) {
            this.value = newVal
        }
        else if (newVal > this.value && this.rightChild) {
            this.rightChild.insertNode(newVal)
        }
        else if (newVal <= this.value && this.leftChild) {
            this.leftChild.insertNode(newVal)
        }
        else if (newVal <= this.value) {
            this.leftChild = new BSNode(newVal)
        }
        else {
            this.rightChild = new BSNode(newVal)
        }
    }
    findNode(node, val) {
        if (node.value === val) {
            return true
        } else if (!node.rightChild && !node.leftChild) {
            return false
        }


        if (val < node.value) {
            return this.findNode(node.leftChild, val)
        } else if (val > node.value) {
            return this.findNode(node.rightChild, val)
        }

    }
    findCommonParent(node1, node2) {
        return this.findCommonParentForTree(this, node1, node2)
    }


    findCommonParentForTree(root, node1, node2) {
        if (!root) {
            return null
        } else if (root.value === node1 || root.value === node2) {
            return root
        }


        let leftCommon = this.findCommonParentForTree(root.leftChild, node1, node2)
        let rightCommon = this.findCommonParentForTree(root.rightChild, node1, node2)


        if (leftCommon && rightCommon) {
            return root
        }
        else {
            return leftCommon ? leftCommon : rightCommon
        }
    }
    removeNode(node, val) {
        if (!node)
            return undefined;
        else if (val < node.value) {
            node.leftChild = this.removeNode(node.leftChild, val);
            return node;
        } else if (val > node.value) {
            node.rightChild = this.removeNode(node.rightChild, val);
            return node;
        } else {
            if (!node.leftChild && !node.rightChild) {
                node = undefined;
                return node;
            } else if (!node.leftChild) {
                node = node.rightChild;
                return node;
            } else if (!node.rightChild) {
                node = node.leftChild;
                return node;
            }


            let minNode = this.findMinNode(node.leftChild);
            node.value = minNode.value;


            node.leftChild = this.removeNode(node.leftChild, minNode.value);
            return node;
        }


    }
    findMinNode(node) {
        if (!node.rightChild)
            return node;
        else
            return this.findMinNode(node.rightChild);
    }
}
const letters = ["H", "E", "S", "G", "L", "Y", "I"]

let bSTree = new BSNode()

letters.forEach(l => bSTree.insertNode(l))

console.log(bSTree.findCommonParent('I','G'));
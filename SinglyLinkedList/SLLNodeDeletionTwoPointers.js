/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

 /* Deleting Nth node using two pointers */
 var removeNthFromEnd = function(head, n) {
    let currentNode = head;
    var p1 = 0;
    var p2 = 0;

    while(currentNode.next != null) {
        if(p2 === n) {
            
        }
        currentNode = currentNode.next;
        break;
    }


 };

var list = {
    val: 20,
    next: {
        val: 30,
        next: {
            val: 40,
            next: null
        }
    }
};
removeNthFromEnd(list,1);

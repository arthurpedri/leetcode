/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
   /*  Own Solution:
    const array = new Array();
    let traverse = head;
    let size = 0;
    while (traverse !== null) {
      array.push(traverse);
      traverse = traverse.next;
      size++;
    }

    return array[Math.floor(size/2)]; */

    // After Study:
    let fast = head;
    let slow = fast;

    while (fast && fast.next){
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
};


// 0 1 2 3 4 5 - 6 
// 0 1 2 3 4 - 5 floor
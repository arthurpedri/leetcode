/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    let i = 0, j = -1; // j is -1 to give the index instead of the size 
    const fullList = [];
    let traverse = head;
    while (traverse !== null) {
      fullList.push(traverse.val);
      j++;
      traverse = traverse.next;
    }

    while (i < j) {
      if (fullList[i] === fullList[j]) {
        i++;
        j--;
      }
      else {
        return false;
      }
    }
    return true;
    
};



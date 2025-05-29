function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // dois ponteiros
  // um fica no início e outro vai até o fim da lista
  // é calculado o totalLength
  // faço um for com contador invertido decrementando o length da lista
  // quando o contador for n + 1, faço left.next = left.next.next

  let [left, right, totalLen] = [head, head, 0];

  if (!head.next) return null;

  while (right.next) {
    totalLen++;

    right = right.next;
  }

  totalLen++;

  // edge cases

  if (n === 1) {
    for (let i = 1; i < totalLen - 1; i++) {
      left = left.next;
    }

    left.next = null;

    return head;
  }

  if (totalLen === 2 && n === 1) {
    head.next = null;
    return head;
  }

  if (totalLen === 2 && n === 2) return head.next;

  if (n === 3 && totalLen === 3) return head.next;

  if (totalLen === 3) totalLen++;

  // general case

  totalLen--;

  for (let i = totalLen; i > n + 1; i--) {
    left = left?.next;
  }

  left.next = left?.next?.next || null;

  return head;
};

const head = new ListNode(1, new ListNode(2, new ListNode(3, null))); // [1, 2, 3]

const input = head;
const output = removeNthFromEnd(input, 2);

console.log(output);

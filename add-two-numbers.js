class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let l1Node = l1;
  let l2Node = l2;

  let carry = 0;

  let newHead = new ListNode(undefined, undefined);
  let dumbNode = newHead;

  while (l1Node && l2Node) {
    let val = l1Node.val + l2Node.val + carry;
    carry = 0;

    if (val > 9) {
      carry = Math.floor(val / 10);
      val = val % 10;
    }

    dumbNode.val = val;
    dumbNode.next = new ListNode(undefined, undefined);

    dumbNode = dumbNode.next;

    l1Node = l1Node.next;
    l2Node = l2Node.next;
  }

  return newHead;
};

function arrayToList(arr) {
  let head = null;
  let current = null;
  for (let val of arr) {
    if (!head) {
      head = new ListNode(val);
      current = head;
    } else {
      current.next = new ListNode(val);
      current = current.next;
    }
  }
  return head;
}

function listToArray(head) {
  const arr = [];
  let current = head;
  while (current) {
    arr.push(current.val);
    current = current.next;
  }
  return arr;
}

const l1 = arrayToList([2, 4, 3]);
const l2 = arrayToList([5, 6, 4]);

const output = listToArray(addTwoNumbers(l1, l2));

console.log(output);

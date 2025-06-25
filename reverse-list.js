var reverseList = function (head) {
  if (!head?.next) return head;

  const newHead = reverseList(head.next);

  head.next.next = head;
  head.next = null;

  return newHead;
};

const fnInput = arrayToList([1, 2, 3, 4]);

const output = reverseList(fnInput);

console.log(listToArray(output));

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

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

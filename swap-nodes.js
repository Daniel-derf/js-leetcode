function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var swapNodes = function (head, k) {
  let [start, end] = [head, head];

  let [nodeCount, listLen] = [head, 0];

  while (nodeCount) {
    nodeCount = nodeCount.next;
    listLen++;
  }

  for (let i = 1; i < k; i++) {
    start = start.next;
  }

  for (let i = 1; i <= listLen - k; i++) {
    end = end.next;
  }

  [start.val, end.val] = [end.val, start.val];

  return head;
};

const input = arrayToList([1, 2, 3, 4, 5]);
const output = swapNodes(input, 2);

console.log(listToArray(output));

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

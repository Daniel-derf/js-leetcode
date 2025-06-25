var reverseBetween = function (head, left, right) {
  let dummy = new ListNode(0);
  let node = dummy;

  dummy.next = head;

  let i = 0;

  while (i < left - 1) {
    i++;
    node = node?.next;
  }

  let x = i;

  let afterNode = node;

  while (x < right + 1) {
    x++;
    afterNode = afterNode.next;
  }

  node.next = recursiveReverse(node?.next, i + 1, right, afterNode);

  let node2 = node.next;

  for (let i = 1; i < right; i++) {
    node2 = node2.next;
  }

  node2.next = afterNode;

  return dummy.next;
};

function recursiveReverse(head, cur_i, max_i) {
  if (!head?.next || cur_i >= max_i) return head;

  cur_i++;

  const newHead = recursiveReverse(head.next, cur_i, max_i);

  head.next.next = head;
  head.next = null;

  return newHead;
}

const fnInput = arrayToList([1, 2, 3]);

const output = reverseBetween(fnInput, 1, 2);

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

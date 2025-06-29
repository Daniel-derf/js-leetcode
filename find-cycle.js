var hasCycle = function (head) {
  let node = head;
  let next = node.next;

  while (node) {
    if (next === node) {
      return true;
    }

    if (!next) node = node?.next;

    next = next?.next;
  }

  return false;
};

const input = new ListNode(0);
input.next = new ListNode(1, input);

const output = hasCycle(input);

console.log(output);

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

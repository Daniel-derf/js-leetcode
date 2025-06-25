function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var deleteDuplicates = function (head) {
  // caso-base
  if (!head?.next) return head;

  if (head?.next.val === head?.val) {
    return head.next;
  }

  if (head?.next.val === head?.val && !head?.next?.next) {
    return null;
  }

  // caso recursivo
  const nextNode = head.next;

  head.next = deleteDuplicates(nextNode.next);

  return head;
};

const input = arrayToList([1, 1, 1, 2, 3, 3]);
const output = deleteDuplicates(input);

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

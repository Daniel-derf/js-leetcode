var deleteDuplicates = function (head, prev = null) {
  // caso-base
  if (!head?.next && prev?.val === head?.val) return null;
  if (!head?.next) return head;
  if (prev?.val === head?.val && !head?.next) return null;

  // caso recursivo
  if (prev?.val === head.val) return deleteDuplicates(head.next, head);

  if (head?.next?.val === head?.val) {
    const next = head.next;
    const validNode = next.next;

    return deleteDuplicates(validNode, next);
  }

  head.next = deleteDuplicates(head.next);

  return head;
};

const input = arrayToList([1, 1, 1]);
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

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

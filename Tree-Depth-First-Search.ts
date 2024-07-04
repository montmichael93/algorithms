function search(current: BinaryNode<number> | null, needle: number): boolean {
  if (!current) {
    return false;
  }
  if (current.value === needle) {
    return true;
  }
  if (current.value < needle) {
    return search(current.right, needle);
  }
  return search(current.left, needle);
}

function tree_dept_first_search(
  head: BinaryNode<number>,
  needle: number
): boolean {
  return search(head, needle);
}

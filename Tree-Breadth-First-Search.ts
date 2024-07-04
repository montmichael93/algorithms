function tree_breadth_first_search(
  head: BinaryNode<number>,
  needle: number
): boolean {
  const queue: (BinaryNode<number> | null)[] = [head];
  while (queue.length) {
    const current = queue.shift() as BinaryNode<number> | undefined | null;
    if (!current) {
      continue;
    }
    if (current.value === needle) {
      return true;
    }
    queue.push(current?.left);
    queue.push(current?.right);
  }
  return false;
}

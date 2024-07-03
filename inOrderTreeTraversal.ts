function in_order_walk(
  current: BinaryNode<number> | null,
  path: number[]
): number[] {
  if (!current) {
    return path;
  }
  //pre
  //recurse
  in_order_walk(current.left, path);
  path.push(current.value);
  in_order_walk(current.right, path);
  //post
  return path;
}

function in_order_search(head: BinaryNode<number>): number[] {
  return in_order_walk(head, []);
}

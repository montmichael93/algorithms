function post_order_walk(
  current: BinaryNode<number> | null,
  path: number[]
): number[] {
  if (!current) {
    return path;
  }
  //pre
  //recurse
  post_order_walk(current.left, path);
  post_order_walk(current.right, path);
  //post
  path.push(current.value);
  return path;
}

function post_order_search(head: BinaryNode<number>): number[] {
  return post_order_walk(head, []);
}

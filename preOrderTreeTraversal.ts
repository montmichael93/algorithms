function pre_Order_Walk(
  current: BinaryNode<number> | null,
  path: number[]
): number[] {
  if (!current) {
    return path;
  }
  //pre
  path.push(current.value);
  //recurse
  pre_Order_Walk(current.left, path);
  pre_Order_Walk(current.right, path);
  //post
  return path;
}

function pre_order_search(head: BinaryNode<number>): number[] {
  return pre_Order_Walk(head, []);
}

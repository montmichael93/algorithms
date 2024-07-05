function hasUnvisited(seen: boolean[], distance: number[]): boolean {
  return seen.some((s, i) => !s && distance[i] < Infinity);
}
function getLowestUnvisited(seen: boolean[], distance: number[]): number {
  let index = -1;
  let lowestDistance = Infinity;
  for (let i = 0; i < seen.length; ++i) {
    if (seen[i]) {
      continue;
    }
    if (lowestDistance > distance[i]) {
      lowestDistance = distance[i];
      index = i;
    }
  }
  return index;
}
function dijkstra_shortest_path(
  source: number,
  sink: number,
  array: WeightedAdjacencyMatrix
): number[] {
  const seen = new Array(array.length).fill(false);
  const prev = new Array(array.length).fill(-1);
  const distances = new Array(array.length).fill(Infinity);
  distances[source] = 0;
  while (hasUnvisited(seen, distances)) {
    const current = getLowestUnvisited(seen, distances);
    seen[current] = true;
    const adjacency = array[current];
    for (let i = 0; i < adjacency.length; ++i) {
      const edge = adjacency[i];
      if (seen[edge.to]) {
        continue;
      }
      const distance = distances[current] + edge.weight;
      if (distance < distances[edge.to]) {
        distances[edge.to] = distance;
        prev[edge.to] = current;
      }
    }
  }
  const out: number[] = [];
  let current = sink;
  while (prev[current] !== -1) {
    out.push(current);
    current = prev[current];
  }
  out.push(source);
  return out.reverse();
}

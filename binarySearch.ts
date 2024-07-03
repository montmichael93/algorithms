export default function bs_list(haystack: number[], needle: number): boolean {
  let low = 0;
  let high = haystack.length;
  do {
    const midpoint = Math.floor(low + (high - low) / 2);
    const value = haystack[midpoint];
    if (value === needle) {
      return true;
    } else if (value > needle) {
      high = midpoint;
    } else {
      low = midpoint + 1;
    }
  } while (low < high);
  return false;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const num = 32;

console.log(bs_list(arr, num));

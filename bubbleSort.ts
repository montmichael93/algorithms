function bubble_sort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr.length - 1 - i; ++j) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}

const array = [5, 8, 3, 9, 4, 6, 7, 10, 2, 1];
console.log(bubble_sort(array));

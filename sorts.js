// Mergesort
let mergeSort = (arr) => {
  if (arr.length < 2) return arr;
  let midpoint = parseInt(arr.length / 2);
  // use slice to not worry about errors with indexing [midpoint, arr.length -1];
  let left = arr.slice(0, midpoint);
  let right = arr.slice(midpoint, arr.length);
  return merge(mergeSort(left), mergeSort(right));
}

let merge = (left, right) => {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length)
    result.push(left.shift());
  while (right.length)
    result.push(right.shift());
  return result;
}


let quicksort = (arr) => {
    if (arr.length < 2)
        return arr;
    let less_than_pivot = [],
    greater_than_pivot = [];
    let pivot = arr[arr.length - 1];

    for (let idx = 1; idx < arr.length; idx++) {
        if (pivot > arr[idx]) {
           less_than_pivot.push(arr[i]);
        } else {
           greater_than_pivot.push(arr[i]);
        }
    }

    return quicksort(less_than_pivot).concat(pivot, quicksort(greater_than_pivot));
};

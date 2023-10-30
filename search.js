const num = [2, 6, 8, 22, 6, 7, 0, 1];
let target = 22;
console.log(binary(num, target));
function binary(num, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (start >= end && arr[mid] !== target) {
    if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
    mid = Math.floor((start + end) / 2);
  }
  if (arr[mid] === target) return mid;

  return -1;
}

function linear(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

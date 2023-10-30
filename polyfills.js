// Array.prototype.myMap = function (cb) {
//   if (!this || Array.isArray(this)) new Error(`${this} is not a Array`);
//   if (!cb || typeof cb !== "function")
//     new Error(`${callback} is not a function`);
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     newArr.push(cb(this[i], i, this));
//   }
//   return newArr;
// };
// const numMap = [2, 4, 8];
// let newNumMap = numMap.myMap((elm) => elm * elm);
// console.log(newNumMap);

// Array.prototype.myFilter = function (cb) {
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     const arrElm = cb(this[i], i, this);
//     if (arrElm) {
//       newArr.push(this[i]);
//     }
//   }
//   return newArr;
// };
// const numfilter = [2, 0, 3, 4, 8];
// let newNumfilter = numfilter.myFilter((elm, i, arr) => {
//   return elm
// });
// console.log(newNumfilter);

Array.prototype.myReduce = function (cb, initialValue) {
  let startIdx, accToBe;
  if (initialValue !== undefined) {
    accToBe = initialValue;
    startIdx = 0;
  }
  if (initialValue === undefined && this.length) {
    accToBe = this[0];
    startIdx = 1;
  }
  for (let i = startIdx; i < this.length; i += 1) {
    accToBe = cb(accToBe, this[i], i, this);
  }
  return accToBe;
};

const num = [2, 8, 3, 4, 8];
let output = num.myReduce((acc, elm, i, arr) => {
  return acc < elm ? elm : acc;
});

console.log(output);

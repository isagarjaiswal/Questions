// // Array.prototype.myMap = function (cb) {
// //   if (!this || Array.isArray(this)) new Error(`${this} is not a Array`);
// //   if (!cb || typeof cb !== "function")
// //     new Error(`${callback} is not a function`);
// //   let newArr = [];
// //   for (let i = 0; i < this.length; i++) {
// //     newArr.push(cb(this[i], i, this));
// //   }
// //   return newArr;
// // };
// // const numMap = [2, 4, 8];
// // let newNumMap = numMap.myMap((elm) => elm * elm);
// // console.log(newNumMap);

// Array.prototype.customMap = function (cb) {
//   if (!this || !Array.isArray(this)) {
//     new Error();
//   }
//   if (!cb || typeof cb !== "function") {
//     new Error();
//   }
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     newArr.push(cb(this[i], i, this));
//   }
//   return newArr;
// };
// const num = [2, 4, 8];
// let output = num.customMap((elm, i, arr) => {
//   return elm * elm
// });
// console.log(output);

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
//   console.log(elm, i, arr);
// });
// console.log(newNumfilter);

// // Array.prototype.myReduce = function (cb, initialValue) {
// //   let startIdx, accToBe;
// //   if (initialValue !== undefined) {
// //     accToBe = initialValue;
// //     startIdx = 0;
// //   }
// //   if (initialValue === undefined && this.length) {
// //     accToBe = this[0];
// //     startIdx = 1;
// //   }
// //   for (let i = startIdx; i < this.length; i += 1) {
// //     accToBe = cb(accToBe, this[i], i, this);
// //   }
// //   return accToBe;
// // };

// // const num = [2, 8, 3, 4, 8];
// // let output = num.myReduce((acc, elm, i, arr) => {
// //   return acc < elm ? elm : acc;
// // });
// // console.log(output);

// // Array.prototype.customReduce = function (cb, initialValue) {
// //   let startIdx, accToBe;

// //   if (initialValue !== undefined) {
// //     if (!this.length) return initialValue;

// //     accToBe = initialValue;
// //     startIdx = 0;
// //   }
// //   if (initialValue === undefined && this.length) {
// //     accToBe = this[0];
// //     startIdx = 1;
// //   }
// //   if (!this || !Array.isArray(this)) new Error(`${this} is not a array`);
// //   if (!cb || typeof cb !== "function") {
// //     new Error(`${cb} is not a function`);
// //   }

// //   for (let i = startIdx; i < this.length; i++) {
// //     accToBe = cb(accToBe, this[i], i, this);
// //   }
// //   return accToBe;
// // };

// // const num = [2, 8, 3, 4, 8];

// function fullDetails(...args) {
//   console.log(this.name + " " + this.age + " =>" + args);
// }

// const obj = {
//   name: "abc",
//   age: "69",
// };

// Function.prototype.myApply = function (obj, args) {
//   obj.fun = this;
//   const result = obj.fun(...args);
//   delete obj.func;
//   return result;
// };

// fullDetails.myApply(obj, ["hss", "sdd"]);

// function fullDetails(...args) {
//   console.log(this.name + " " + this.age + " =>" + args);
// }

// const obj = {
//   name: "abc",
//   age: "69",
// };

// Function.prototype.myCall = function (obj, ...args) {
//   obj.fun = this;
//   const result = obj.fun(...args);
//   delete obj.func;
//   return result;
// };

// fullDetails.myCall(obj, "ss","bdbd");

function fullDetails(...args) {
  console.log(this.name + " " + this.age + " =>" + args);
}

const obj = {
  name: "abc",
  age: "69",
};

Function.prototype.myBind = function (...args) {
  let obj = this;
  return function () {
    obj.call(...args);
  };
};

console.log(fullDetails.myBind(obj, "ss", "bdbd")());

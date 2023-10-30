const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

const throttleFunc = throttle(() => {
  console.log("throttle");
}, 2000);
const debounceFunc = debounce(() => {
  console.log("debounce");
}, 2000);

btn2.addEventListener("click", debounceFunc);
btn1.addEventListener("click", throttleFunc);

function debounce(cb, delay) {
  let timeID;
  return function (...args) {
    clearTimeout(timeID);
    timeID = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}
function throttle(cb, delay) {
  let exuTime = 0;

  return function (...args) {
    let now = Date.now();
    if (now - exuTime >= delay) {
      cb(...args);
      exuTime = now;
    }
  };
}

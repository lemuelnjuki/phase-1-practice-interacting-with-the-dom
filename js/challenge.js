const counter = document.querySelector("#counter");
const like = document.querySelector(".likes");
const comments = document.querySelector(".comments");

function counters() {
  count = setInterval(() => {
    counter.innerText++;
  }, 1000);
}

document.addEventListener("DOMContentLoaded", counters);

const minus = document.querySelector("#minus");

function decrement() {
  if(counter.innerText > 0) {
    counter.innerText--;
  }
}


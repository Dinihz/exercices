const outLoop = document.getElementById("outLoop");

let numbers = 0;
for (let i = 1; i < 4; i++) {
  numbers = numbers + i;
}

outLoop.textContent = numbers;

let numArray = [];

function addNumber() {
  let num = parseInt(document.getElementById("inputNum").value);
  numArray.push(num);
  document.getElementById("txtArray").innerHTML = "Mảng: " + numArray;
}

function sumPositive() {
  let sum = numArray.filter((num) => num > 0).reduce((a, b) => a + b, 0);
  document.getElementById("txtSum").innerHTML = "Tổng số dương: " + sum;
}

function countPositive() {
  let count = numArray.filter((num) => num > 0).length;
  document.getElementById("txtCount").innerHTML = "Số dương: " + count;
}

function findMin() {
  if (numArray.length === 0) {
    document.getElementById("txtMin").innerHTML = "Mảng rỗng";
    return;
  }
  let min = Math.min(...numArray);
  document.getElementById("txtMin").innerHTML = "Số nhỏ nhất: " + min;
}

function findMinPositive() {
  let positiveNums = numArray.filter((num) => num > 0);
  if (positiveNums.length === 0) {
    document.getElementById("txtMinPos").innerHTML = "Không có số dương";
  } else {
    let minPos = Math.min(...positiveNums);
    document.getElementById("txtMinPos").innerHTML =
      "Số dương nhỏ nhất: " + minPos;
  }
}

function findLastEven() {
  let evenNums = numArray.filter((num) => num % 2 === 0);
  document.getElementById("txtEven").innerHTML =
    evenNums.length > 0
      ? "Số chẵn cuối cùng: " + evenNums[evenNums.length - 1]
      : "Không có số chẵn";
}

function swapElements() {
  const index1 = parseInt(document.getElementById("inputIndex1").value);
  const index2 = parseInt(document.getElementById("inputIndex2").value);
  const txtChangePos = document.getElementById("txtChangePos");

  if (isNaN(index1) || isNaN(index2)) {
    txtChangePos.textContent = "Vui lòng nhập vào hai số nguyên.";
    return;
  }

  if (
    index1 < 0 ||
    index1 >= numArray.length ||
    index2 < 0 ||
    index2 >= numArray.length
  ) {
    txtChangePos.textContent = "Chỉ số nằm ngoài phạm vi mảng.";
    return;
  }

  [numArray[index2], numArray[index1]] = [numArray[index1], numArray[index2]];
  txtChangePos.textContent =
    "Mảng sau khi đổi chỗ: [" + numArray.join(", ") + "]";
}

function sortArray() {
  numArray.sort((a, b) => a - b);
  document.getElementById("txtIncrease").innerHTML =
    "Mảng sau khi sắp xếp: " + numArray;
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function findFirstPrime() {
  let primeNum = numArray.find((num) => isPrime(num));
  document.getElementById("txtPrime").innerHTML =
    primeNum !== undefined ? primeNum : "Không có số nguyên tố";
}

function countIntegers() {
  document.getElementById("txtIntCount").innerHTML =
    "Số lượng số nguyên: " + numArray.length;
}

function comparePositiveNegative() {
  let positiveCount = numArray.filter((num) => num > 0).length;
  let negativeCount = numArray.filter((num) => num < 0).length;
  let result =
    positiveCount > negativeCount
      ? "Số dương > Số âm"
      : positiveCount < negativeCount
      ? "Số âm > Số dương"
      : "Số âm = Số dương";
  document.getElementById("txtCompare").innerHTML = result;
}

document.addEventListener(
  "contextmenu",
  (e) => {
    e.preventDefault();
  },
  false
);

document.onkeydown = function (e) {
  e = e || window.event;
  if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && e.keyCode == 73)) {
    return false;
  }
};

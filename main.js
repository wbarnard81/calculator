let displayArray = [];
let mathButton = [];
let mathArray = [];
let firstSet = [];
let mathGroup = [];

window.onload = function() {
  document.getElementById("calcText").value = 0;
};

function isNumber(displayArray) {
  return !isNaN(parseFloat(displayArray)) && isFinite(displayArray);
}

function getReady() {
  firstSet = displayArray.filter(isNumber);
  displayArray = [];
  mathArray = firstSet.join("");
  mathGroup.push(mathArray);
  mathArray = [];
  mathGroup.map(function(item) {
    return parseInt(item);
  });
}

function updateDisplay(id) {
  var numButton = id.innerHTML;
  displayArray.push(numButton);
  document.getElementById("calcText").value = displayArray.join("");
}

function mathDisplay(id) {
  mathButton = id.innerHTML;
  displayArray.push(mathButton);
  document.getElementById("calcText").value = displayArray.join("");
  getReady();
}

function clearDisplay() {
  document.getElementById("calcText").value = 0;
  displayArray = [];
}

$("#equal").on("click", function() {
  getReady();
  if (mathButton === "+") {
    var sum = mathGroup.reduce(function(a, b) {
      return Number(a) + Number(b);
    });
  } else if (mathButton === "-") {
    var sum = mathGroup.reduce(function(a, b) {
      return Number(a) - Number(b);
    });
  } else if (mathButton === "*") {
    var sum = mathGroup.reduce(function(a, b) {
      return Number(a) * Number(b);
    });
  } else if (mathButton === "/") {
    var sum = mathGroup.reduce(function(a, b) {
      return Number(a) / Number(b);
    });
  }
  document.getElementById("calcText").value = sum;
  displayArray = [];
  mathGroup = [];
});

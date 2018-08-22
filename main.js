var displayArray = [];
var mathButton = [];

window.onload = function () {
    document.getElementById("calcText").value = 0;
};

function isNumber(displayArray) {
    return !isNaN(parseFloat(displayArray)) && isFinite(displayArray);
}

function updateDisplay(id){
    var numButton = id.innerHTML;
    displayArray.push(numButton);
    document.getElementById("calcText").value = displayArray.join(' ');
};

function updateZero(id){
    var numButton = id.innerHTML;
    displayArray.push(numButton);
    document.getElementById("calcText").value = displayArray.join(' ');
};

function mathDisplay(id) {
    mathButton = id.innerHTML;
    displayArray.push(mathButton);
    document.getElementById("calcText").value = displayArray.join(' ');
}

function clearDisplay(){
    document.getElementById("calcText").value = 0;
    displayArray = [];
}

$('#equal').on('click', function() {
    var validNumbers = displayArray.filter(isNumber);
    if (mathButton == '+') {
        var sum = validNumbers.reduce(function (a, b) {
                return Number(a) + Number(b)
            });
    } else if (mathButton == '-'){
        var sum = validNumbers.reduce(function (a, b) {
                return a - b
            });
    } else if (mathButton == '*'){
        var sum = validNumbers.reduce(function (a, b) {
                return a * b
            });
    } else if (mathButton == '/'){
        var sum = validNumbers.reduce(function (a, b) {
                return a / b
            });
    }
    document.getElementById("calcText").value = sum;
    displayArray = [sum];
});
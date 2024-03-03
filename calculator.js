const display = document.getElementById("display");
let var1 = 0;
let var2 = 0;
let decimalValue = 0.0;
let operator = "";
let operatorOn = false;
let calculationDone = false;

const operations = document.querySelectorAll(".orangeButtons");

const clear = document.getElementById("clear");
const posNeg = document.getElementById("posNeg");
const percent = document.getElementById("percentage");
const divide = document.getElementById("division");
const multiply = document.getElementById("multiply");
const subtract = document.getElementById("subtraction");
const add = document.getElementById("addition");
const equals = document.getElementById("equals");

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const decimal = document.getElementById("decimal");

function updateDisplay(number) {
    if(calculationDone) {
        display.textContent = number;
        calculationDone = false;
        return;
    }
    if(display.textContent.length < 9) {
        if(display.textContent == "0") {
            display.textContent = number;
        }
        else {
            display.textContent += number;
        }
    }
    if(display.textContent != "0") {
        clear.textContent = "C"
    }
}

function addDecimal() {
    if(display.textContent.includes(".")) {
        return;
    }
    if(calculationDone){
        display.textContent = "0";
        calculationDone = false;
    }
    display.textContent += ".";
}

function clearAll() {
    var1 = 0;
    var2 = 0;
    display.textContent = "0";
    operator = "";
    operatorOn = false;
    clear.textContent = "AC";
    one.disabled = false;
    two.disabled = false;
    three.disabled = false;
    four.disabled = false;
    five.disabled = false;
    six.disabled = false;
    seven.disabled = false;
    eight.disabled = false;
    nine.disabled = false;
    zero.disabled = false;
    decimal.disabled = false;
    multiply.disabled = false;
    divide.disabled = false;
    add.disabled = false;
    subtract.disabled = false;
    posNeg.disabled = false;
    percent.disabled = false;
    equals.disabled = false;
}

function makePosOrNeg() {
    let posOrNeg = 0 - parseFloat(display.textContent);
    display.textContent = posOrNeg;
}

function calculatePercent() {
    let percentValue = parseFloat(display.textContent);
    percentValue = Math.round((percentValue/100) * 100)/100;
    display.textContent = percentValue;
    calculationDone = true;
}

function calculate(operatorSign) {
    // Checks for first variable
    if(var1 == 0) {
        var1 = parseFloat(display.textContent);
        if(var1 == 0) {
            return;
        }
        else {
            operator = operatorSign;
            calculationDone = true;
            return;
        }
    }
    // Checks for second variable
    // Second variable cannot be filled before first
    else if(var2 == 0) {
        if(operator == "") {
            operator = operatorSign;
            calculationDone = true;
            return;
        }
        var2 = parseFloat(display.textContent);
        if(var2 == 0 && operator != "/") {
            return;
        }
        else {
            var1 = calculateTotal()
            display.textContent = var1;

            switch(operatorSign) {
                case "+":
                    operator = "+";
                    break;
                case "-":
                    operator = "-";
                    break;
                case "*":
                    operator = "*";
                    break;
                case "/":
                    operator = "/";
                    break;
                case "=":
                    operator = "";
                    break;
            }

            var2 = 0;
            calculationDone = true;
        }
    } 
}

function calculateTotal() {
    let result = 0.0;
    switch(operator) {
        case "+":
            result = var1 + var2;
            break;
        case "-":
            result = var1 - var2;
            break;
        case "*":
            result = var1 * var2;
            break;
        case "/":
            result = var1/var2;
            if(var2 == 0) {
                one.disabled = true;
                two.disabled = true;
                three.disabled = true;
                four.disabled = true;
                five.disabled = true;
                six.disabled = true;
                seven.disabled = true;
                eight.disabled = true;
                nine.disabled = true;
                zero.disabled = true;
                decimal.disabled = true;
                multiply.disabled = true;
                divide.disabled = true;
                add.disabled = true;
                subtract.disabled = true;
                posNeg.disabled = true;
                percent.disabled = true;
                equals.disabled = true;
                return "Nah. Reset";
            }
            break;
    }
    result = Math.round(result * 100000) / 100000;
    return result;
}

one.addEventListener('click', function() {
    updateDisplay(1);
});
two.addEventListener('click', function() {
    updateDisplay(2);
});
three.addEventListener('click', function() {
    updateDisplay(3);
});
four.addEventListener('click', function() {
    updateDisplay(4);
});
five.addEventListener('click', function() {
    updateDisplay(5);
});
six.addEventListener('click', function() {
    updateDisplay(6);
});
seven.addEventListener('click', function() {
    updateDisplay(7);
});
eight.addEventListener('click', function() {
    updateDisplay(8);
});
nine.addEventListener('click', function() {
    updateDisplay(9);
});
zero.addEventListener('click', function() {
    updateDisplay(0);
});
decimal.addEventListener('click', function() {
    addDecimal();
});
clear.addEventListener('click', function() {
    clearAll();
});
posNeg.addEventListener('click', function() {
    makePosOrNeg();
});
percent.addEventListener('click', function() {
    calculatePercent();
});
divide.addEventListener('click', function() {
    calculate("/");
});
multiply.addEventListener('click', function() {
    calculate("*");
});
subtract.addEventListener('click', function() {
    calculate("-");
});
add.addEventListener('click', function() {
    calculate("+");
});
equals.addEventListener('click', function() {
    calculate("=");
});
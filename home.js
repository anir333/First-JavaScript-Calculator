// Content Creation and assignment
let content = "0";
const RESULT = document.getElementById("result");
let lengthResult;
function reassignResult(content) {
    RESULT.innerHTML = content;
    if (content.includes(".")) {
        lengthResult = content.length - 1;
    } else {
        lengthResult = content.length;
    }
    AC()
}
reassignResult(content);

function addDot() {
    const DOT = document.getElementById("dot-button");
    DOT.onclick = function() {
        if (lengthResult < 9) {
            console.log(operation);
            if (!content.includes(".")) {
                content += ".";
                reassignResult(content)
            }
        }
    }
}
addDot()

function addZero() {
    const ZERO = document.getElementById("n0-button");
    ZERO.onclick = function() {
        if (lengthResult < 9) {
            console.log(operation);
            if (content == result) {
                content = "0";
                reassignResult(content);
            }
            if (content !== "0") {
                content += "0";
                reassignResult(content);
            }
        }
    }
}
addZero()

function addOne() {
    const ONE = document.getElementById("n1-button");
    ONE.onclick = function() {
        if (lengthResult < 9) {
            console.log(operation);
            if (content == result) {
                content = "0";
                reassignResult(content);
            }
            if (content === "0") {
                content = "";
                content += "1"
                reassignResult(content);
            } else {
                content += "1";
                reassignResult(content);
            }
        }
    }
}
addOne()


function addTwo() {
    const TWO = document.getElementById("n2-button");
    TWO.onclick = function() {
        if (lengthResult < 9) {
            console.log(operation);
            if (content == result) {
                content = "0";
                reassignResult(content);
            }
            if (content === "0") {
                content = "";
                content += "2"
                reassignResult(content);
            } else {
                content += "2";
                reassignResult(content);
            }
        }
    }
}
addTwo()

function addThree() {
    const THREE = document.getElementById("n3-button");
    THREE.onclick = function() {
        if (lengthResult < 9) {
            if (content == result) {
                content = "0";
                reassignResult(content);
            }
            if (content === "0") {
                content = "";
                content += "3"
                reassignResult(content);
            } else {
                content += "3";
                reassignResult(content);
            }
        }
    }
}
addThree()

function addFour() {
    const FOUR = document.getElementById("n4-button");
    FOUR.onclick = function() {
        console.log(operation);
        if (lengthResult < 9) {
            console.log(operation);
            if (content == result) {
                content = "0";
                reassignResult(content);
            }
            if (content === "0") {
                content = "";
                content += "4"
                reassignResult(content);
            } else {
                content += "4";
                reassignResult(content);
            }
        }
    }
}
addFour()


function addFive() {
    const FIVE = document.getElementById("n5-button");
    FIVE.onclick = function() {
        if (lengthResult < 9) {
            console.log(operation);
            if (content == result) {
                content = "0";
                reassignResult(content);
            }
            if (content === "0") {
                content = "";
                content += "5"
                reassignResult(content);
            } else {
                content += "5";
                reassignResult(content);
            }
        }
    }
}
addFive()

function addSix() {
    const SIX = document.getElementById("n6-button");
    SIX.onclick = function() {
        if (lengthResult < 9) {
            console.log(operation);
            if (content == result) {
                content = "0";
                reassignResult(content);
            }
            if (content === "0") {
                content = "";
                content += "6"
                reassignResult(content);
            } else {
                content += "6";
                reassignResult(content);
            }
        }
    }
}
addSix()

function addSeven() {
    const SEVEN = document.getElementById("n7-button");
    SEVEN.onclick = function() {
        if (lengthResult < 9) {
            console.log(operation);
            if (content == result) {
                content = "0";
                reassignResult(content);
            }
            if (content === "0") {
                content = "";
                content += "7"
                reassignResult(content);
            } else {
                content += "7";
                reassignResult(content);
            }
        }
    }
}
addSeven()


function addEight() {
    const EIGHT = document.getElementById("n8-button");
    EIGHT.onclick = function() {
        if (lengthResult < 9) {
            console.log(operation);
            if (content == result) {
                content = "0";
                reassignResult(content);
            }
            if (content === "0") {
                content = "";
                content += "8"
                reassignResult(content);
            } else {
                content += "8";
                reassignResult(content);
            }
        }
    }
}
addEight()


function addNine() {
    const NINE = document.getElementById("n9-button");
    NINE.onclick = function() {
        console.log(operation);
        if (lengthResult < 9) {
            console.log(operation);
            if (content == result) {
                content = "0";
                reassignResult(content);
            }
            if (content === "0") {
                content = "";
                content += "9"
                reassignResult(content);
            } else {
                content += "9";
                reassignResult(content);
            }
        }
    }
}
addNine()


function AC() {
    const AC = document.getElementById("AC-button");
    if (content === "0") {
        AC.innerHTML = "AC";
    } else {
        AC.innerHTML = "C";
    }
    AC.onclick = function() {
        content = "0";
        operation = []
        reassignResult(content);
        OPERATION_SHOW.innerHTML = "";
    }
}
AC()

function PlusMinus() {
    const PLUSMINUS = document.getElementById("plus/minus-button");
    PLUSMINUS.onclick = function() {
        if (content[0] !== "-" && content != "0") {
            content = "-" + content;
            reassignResult(content);
        } else if (content != "0") {
            content = content.substring(1, lengthResult+1);
            reassignResult(content);
        }
    }
}
PlusMinus()


function PercentageButton() {
    const PERCENTAGE = document.getElementById("percentage-button");
    PERCENTAGE.onclick = function() {
        content = content / "100";
        reassignResult(content.toString());
    }
}
PercentageButton()

// Operands //

const PLUS_SIGN = "+";
const MINUS_SIGN = "-";
const MULTIPLICATION_SIGN = "x";
const DIVISION_SIGN = "/";
const allOperands = [PLUS_SIGN, MINUS_SIGN, MULTIPLICATION_SIGN, DIVISION_SIGN];

function addPlus() {
    const PLUS = document.getElementById("plus-button");
    PLUS.onclick = function() {
        console.log(operation);
        operandClicked(PLUS_SIGN);
    }
}
addPlus()

function addMinus() {
    const MINUS = document.getElementById("minus-button");
    MINUS.onclick = function() {
        console.log(operation);
        operandClicked(MINUS_SIGN);
    }
}
addMinus()

function addMultiplication() {
    const MULTIPLICATION = document.getElementById("multiplication-button");
    MULTIPLICATION.onclick = function() {
        console.log(operation);
        operandClicked(MULTIPLICATION_SIGN);
    }
}
addMultiplication()

function addDivision() {
    const DIVISION = document.getElementById("division-button");
    DIVISION.onclick = function() {
        console.log(operation);
        operandClicked(DIVISION_SIGN);
    }
}
addDivision()


let operation = [];
let firstNum = operation[0];
let operationOperand = operation[1];
let secondNum = operation[2];
let result;
let barLine = "";

function operandClicked(operand) {
    operation.push(content);
    console.log(operation);
    if (operation.length < 3) {
        content = "0";
        reassignResult(content);
        if (allOperands.includes(operation[1])) {
            operation[1] = operand;
            console.log(operation);
        } else {
            operation.push(operand);
            console.log(operation);
        }
        // barLine = operation[0], " ", operation[1];
        printOperation(operation[0] + " " + operation[1]);
    } else if (operation.length == 3) {
        // barLine = " ", operation[2];
        // printOperation(operation[2]);

        secondNum = operation[2];
        printOperation(" " + operation[2] + " " + operand);
        content = "0";
        reassignResult(content);
        firstNum = operation[0];
        operationOperand = operation[1];

        // Calculating result //
        if (operationOperand === PLUS_SIGN) {
            result = parseFloat(firstNum) + parseFloat(secondNum);
        } else if (operationOperand === MINUS_SIGN) {
            result = parseFloat(firstNum) - parseFloat(secondNum);
            if (secondNum[0] === "-") {
                result = result * "-1";
            }
        } else if (operationOperand === MULTIPLICATION_SIGN) {
            result = parseFloat(firstNum) * parseFloat(secondNum);
        } else if (operationOperand == DIVISION_SIGN) {
            result = parseFloat(firstNum) / parseFloat(secondNum);
        }
        
        result = (result).toString();
        operation = [];
        operation.push(result);
        operation.push(operand);
        // printOperation(" ", operand);
        content = result;
    }

    reassignResult(content);
}


// Equal Button //

const EQUAL = document.getElementById("equal-button");
EQUAL.onclick = function() {
    // operation.push(content);
    if (operation.length === 0) {
        result = content;
        reassignResult(result);
        console.log(operation);
    }
    else if (operation.length === 2) {
        operation.push(content);
        printOperation(" " + content);
        firstNum = operation[0];
        operationOperand = operation[1];
        secondNum = operation[2];
        
        // Calculating result //
        if (operationOperand === PLUS_SIGN) {
            result = parseFloat(firstNum) + parseFloat(secondNum);
        } else if (operationOperand === MINUS_SIGN) {
            result = parseFloat(firstNum) - parseFloat(secondNum);
            if (secondNum[0] === "-") {
                result = result * "-1";
            }
        } else if (operationOperand === MULTIPLICATION_SIGN) {
            result = parseFloat(firstNum) * parseFloat(secondNum);
        } else if (operationOperand == DIVISION_SIGN) {
            result = parseFloat(firstNum) / parseFloat(secondNum);
        }

        result = (result).toString();
        operation = [];
        // operation.push(result);
        content = result;
        console.log(operation);
        reassignResult(content);
    }
}

const OPERATION_SHOW = document.getElementById("operation-content");
function printOperation(line) {
    OPERATION_SHOW.innerHTML += line;
}

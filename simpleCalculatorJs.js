
const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;     /*I access the display value and add an input do that display (I write something)*/
}

function clearDisplay() {
    display.value = ""    /*I access the display value and equal that to an empty string (I clear the display*/
}

function calculate() {
    try {
        display.value = eval(display.value); /*The eval function evaluates (its the calculator)*/
    }
    catch (error) {
        display.value = "Invalid";
    }
}
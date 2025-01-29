const display = document.getElementById("display");
let memory = 0;

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function clearEntry() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        const result = eval(display.value);
        if (result > 1e15 || result < -1e15) {
            display.value = result.toExponential(); // Convert to scientific notation
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = "Error";
    }
}

function percentage() {
    try {
        display.value = eval(display.value) / 100;
    } catch (error) {
        display.value = "Error";
    }
}

function toggleSign() {
    if (display.value.startsWith('-')) {
        display.value = display.value.slice(1);
    } else {
        display.value = '-' + display.value;
    }
}

function memoryClear() {
    memory = 0;
}

function memoryRecall() {
    display.value = memory;
}

function memoryAdd() {
    memory += parseFloat(display.value) || 0;
}

function memorySubtract() {
    memory -= parseFloat(display.value) || 0;
}

function memoryStore() {
    memory = parseFloat(display.value) || 0;
}

// Function to handle keyboard input
function handleKeyboardInput(event) {
    const key = event.key;

    // Allow numbers (0-9)
    if (/[0-9]/.test(key)) {
        appendToDisplay(key);
    }

    // Allow operators (+, -, *, /)
    else if (["+", "-", "*", "/"].includes(key)) {
        appendToDisplay(key);
    }

    // Allow decimal point
    else if (key === ".") {
        appendToDisplay(key);
    }

    // Allow Enter key for calculation
    else if (key === "Enter") {
        calculate();
    }

    // Allow Backspace key for clearing the last character
    else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }

    // Allow Escape key for clearing the display
    else if (key === "Escape") {
        clearDisplay();
    }
}

// Add event listener for keyboard input
document.addEventListener("keydown", handleKeyboardInput);
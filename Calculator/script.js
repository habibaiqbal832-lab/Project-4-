// Get display screen
const display = document.getElementById("display");

// Function to add values to display
function appendValue(value) {
    display.value += value;
}

// Function to clear display
function clearDisplay() {
    display.value = "";
}

// Function to calculate result
function calculate() {

    try {

        // Evaluate expression
        let result = eval(display.value);

        // Show result
        display.value = result;

    } catch (error) {

        // Show error if expression is invalid
        display.value = "Error";
    }
}
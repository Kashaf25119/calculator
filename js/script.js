const Input = document.getElementById("input");
const ouput = document.getElementById("output");

function appendToDisplay(input) {
    Input.value += input;
}

function clearDisplay() {
    Input.value = "";
    output.value = "";
}

function cutDisplay(input) {
    Input.value = Input.value.toString().slice(0,-1)
}

function calculate() {
    try {
        ouput.value = eval(Input.value);
    }
    catch(error) {
        ouput.value = "Error";
    }
}
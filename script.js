function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteChar() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function insertValue(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}

function toggleScientific() {
    let scientific = document.getElementById("scientific");
    scientific.style.display = (scientific.style.display === "grid") ? "none" : "grid";
}

if (!localStorage.getItem("isHex"))
    localStorage.setItem("isHex", 'true');

const accentColor = "#777";

let isHex = localStorage.getItem('isHex') === "true";
const str = isHex ? "hex-color" : "simple-color";
document.getElementById(str).style.color = accentColor;

let red = 0;
let green = 0;
let blue = 0;

let randomizeColor = function (e) {
    red = randomize();
    green = randomize();
    blue = randomize();
    let color = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
    if (isHex)
        color = `rgb(${red},${green},${blue})`;

    document.getElementById('color').style.setProperty('background', color);
    document.getElementById("color-flipper-color").innerHTML = `Цвет: ${color}`;
}

let saveToLocalStorage = function (key = 'isHex', value = true) {
    localStorage.setItem(key, value.toString());
}

randomizeColor();

function randomize() {
    return Math.floor(0 + Math.random() * 255);
}

document.getElementById("color-flipper-button").addEventListener('click', function (e) { randomizeColor(e) });
document.getElementById("hex-color").addEventListener('click', function (e) {
    this.style.color = accentColor;
    document.getElementById("simple-color").style.color = "black";
    isHex = true;
    saveToLocalStorage();
    let color = `Цвет: #${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
    document.getElementById("color-flipper-color").innerHTML = color;
});

document.getElementById("simple-color").addEventListener('click', function (e) {
    this.style.color = accentColor;
    document.getElementById("hex-color").style.color = "black";
    isHex = false;
    saveToLocalStorage('isHex', false);
    let color = `Цвет: rgb(${red},${green},${blue})`;
    document.getElementById("color-flipper-color").innerHTML = color;
});


document.getElementById("color-flipper-copy").addEventListener("click", function (e) {
    let color = `rgb(${red},${green},${blue})`;
    if (isHex) {
        color = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
    }

    navigator.clipboard.writeText(color).then(function () {

    })
});
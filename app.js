let red = 0;
let green = 0;
let blue = 0;
let colorFlipperButton = document.getElementById("color-flipper-button");
let hexColor = document.getElementById("hex-color");
let simpleColor = document.getElementById("simple-color");
const accentColor = "black";
const nonAccentColor = '#777';

let randomizeColor = function () {
    function randomize() {
        return Math.floor(0 + Math.random() * 255);
    }

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




// code goes here

if (!localStorage.getItem("isHex"))
    localStorage.setItem("isHex", 'true');


let isHex = localStorage.getItem('isHex') === "true";
const str = isHex ? "hex-color" : "simple-color";
document.getElementById(str).style.color = accentColor;



randomizeColor();
colorFlipperButton.addEventListener('click', randomizeColor);

hexColor.onclick = function (e) {
    this.style.color = accentColor;
    document.getElementById("simple-color").style.color = nonAccentColor;
    isHex = true;
    saveToLocalStorage();
    let color = `Цвет: #${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
    document.getElementById("color-flipper-color").innerHTML = color;
}

simpleColor.onclick = function (e) {
    this.style.color = accentColor;
    document.getElementById("hex-color").style.color = nonAccentColor;
    isHex = false;
    saveToLocalStorage('isHex', false);
    let color = `Цвет: rgb(${red},${green},${blue})`;
    document.getElementById("color-flipper-color").innerHTML = color;
}

document.getElementById("color-flipper-copy").addEventListener("click", function (e) {
    let color = `rgb(${red},${green},${blue})`;

    if (isHex)
        color = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;

    navigator.clipboard.writeText(color).then(function () {

    })
});
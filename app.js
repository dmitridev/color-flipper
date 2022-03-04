let red = 0;
let green = 0;
let blue = 0;
let colorFlipperButton = document.getElementById("color-flipper-button");
let hexColor = document.getElementById("hex-color");
let simpleColor = document.getElementById("simple-color");
let colorH1 = document.getElementById("color-flipper-color");
let colorBlock = document.getElementById("color");
let copyButton = document.getElementById("color-flipper-copy")
const accentColor = "black";
const nonAccentColor = '#777';

//helpers
let getKey = (key = 'isHex') => localStorage.getItem(key);
let setKey = (key = 'isHex', value = true) => localStorage.setItem(key, value);
let toHex = (r = 0, g = 0, b = 0) => `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`
let toRGB = (r = 0, g = 0, b = 0) => `rgb(${r},${g},${b})`

let randomizeColor = function () {
    function randomize() {
        return Math.floor(0 + Math.random() * 255);
    }

    red = randomize();
    green = randomize();
    blue = randomize();
    let color = toRGB(red, green, blue);

    if (getKey('isHex') === "true")
        color = toHex(red, green, blue);

    colorBlock.style.setProperty('background', color);
    colorH1.innerHTML = `Цвет: ${color}`;
}

let saveToLocalStorage = function (key = 'isHex', value = true) {
    localStorage.setItem(key, value.toString());
}

// code goes here
if (!getKey('isHex'))
    localStorage.setItem("isHex", true);

const str = getKey('isHex') == "true" ? "hex-color" : "simple-color";
document.getElementById(str).style.color = accentColor;

randomizeColor();
colorFlipperButton.addEventListener('click', randomizeColor);

hexColor.onclick = function (e) {
    this.style.color = accentColor;
    simpleColor.style.color = nonAccentColor;
    colorH1.innerHTML = `Цвет: ${toHex(red, green, blue)}`;
    setKey('isHex', true);
}

simpleColor.onclick = function (e) {
    this.style.color = accentColor;
    hexColor.style.color = nonAccentColor;
    colorH1.innerHTML = `Цвет: ${toRGB(red, green, blue)}`;
    setKey('isHex', false);
}

copyButton.addEventListener("click", async function (e) {
    let color = toRGB(red, green, blue);

    if (getKey('isHex') === "true")
        color = toHex(red, green, blue);

    try {
        await navigator.clipboard.writeText(color);
        copyButton.innerHTML = "Скопировано";
    } catch (e) {
        copyButton.innerHTML = "Ошибка копирования";

    }
    setInterval(() => copyButton.innerHTML = "Скопировать", 2000);
});
let isHex = true;
document.getElementById("simple-color").style.color = "#777";
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

randomizeColor();

function randomize() {
    return Math.floor(0 + Math.random() * 255);
}

document.getElementById("color-flipper-button").addEventListener('click', function (e) { randomizeColor(e) });
document.getElementById("hex-color").addEventListener('click', function (e) {
    this.style.color = '#777';
    document.getElementById("simple-color").style.color = "black";
    isHex = true;
    let color = `Цвет: #${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
    document.getElementById("color-flipper-color").innerHTML = color;
});

document.getElementById("simple-color").addEventListener('click', function (e) {
    this.style.color = '#777';
    document.getElementById("hex-color").style.color = "black";
    isHex = false;
    let color = `Цвет: rgb(${red},${green},${blue})`;
    document.getElementById("color-flipper-color").innerHTML = color;
});


document.getElementById("color-flipper-copy").addEventListener("click", function (e) {
    let color=`rgb(${red},${green},${blue})`;
    if(isHex){
        color = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
    }
    navigator.clipboard.writeText(color).then(function(){
        
    })
});
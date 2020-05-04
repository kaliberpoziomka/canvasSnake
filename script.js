
let canvas = document.getElementById('canvas');
let context = canvas.getContext("2d");

let canvas2 = document.getElementById('canvas2');
let context2 = canvas2.getContext("2d");

let canvas3 = document.getElementById('canvas3');
let context3 = canvas3.getContext("2d");

let speed = 2.5;


function draw(x,y,w,h){
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillRect(x, y, w, h);
}

function draw2(x,y,w,h){
    context2.clearRect(0, 0, canvas2.width, canvas2.height);
    context2.fillRect(x, y, w, h);
}

function draw3(x,y,w,h){
    context3.clearRect(0, 0, canvas3.width, canvas3.height);
    context3.fillRect(x, y, w, h);
}

window.addEventListener('scroll', () => {
    position = window.scrollY;
    draw(0,20+position*speed,30,135);
    draw2(-1000+position*speed,0,135,30);
    draw3(0,-2035+position*speed,30,135);
});
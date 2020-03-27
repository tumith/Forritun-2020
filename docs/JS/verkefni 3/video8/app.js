const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = 'black';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
// ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
  if (!isDrawing) return; // stop the fn from running when they are not moused down
  console.log(e);
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

/*Konami code*/
const pressed = [];
const secretCode = 'motomoto';
const konamiCode = 'gunnar';
const back = 'back';

window.addEventListener('keyup', (e) => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
    console.log('virkni');
    ctx.strokeStyle = 'blue';
    document.body.style.backgroundImage="url('https://cdn.discordapp.com/attachments/327134378780262411/693088040121270322/yahoo_2.jpg')";
  } 
  if (pressed.join('').includes(konamiCode)) {
    console.log('virkni');
    ctx.strokeStyle = 'red';
    document.body.style.backgroundImage="url('https://tskoli.is/wp-content/uploads/2017/11/Gunnar-Thorunnarson-150x150.jpg')";
  }
  if (pressed.join('').includes(back)) {
    console.log('virkni');
    ctx.strokeStyle = 'black';
    document.body.style.backgroundImage="url('https://img.papyrusonline.com/media/catalog/product/LCI/NG/Nh/YTMwNzY4YTU2NzNmZWM2ZWEyNWI2MWM2YjhmYzIwZjhlYmE1YTVmZmMxZGQ1MGQzMTY2NDc0NWM5NzFhZTp7ImRzIjoiaW1hZ2UiLCJmIjoiXC8yXC84XC8yODU4Nl9kZWZhdWx0XzIuanBnIiwiZmEiOnRydWUsImZmIjp0cnVlLCJmcSI6OTAsImZ0Ijp0cnVlfQ~~.jpg')";
  }
  console.log(pressed);
});
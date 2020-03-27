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
  console.log(pressed);
});
/*Flexable background picure*/
const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    console.log('Hello');
    this.classList.toggle('open');
}

function toggleActive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
/*--------------------------------------------------------- */

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
    document.getElementById('newpic1').style.backgroundImage="url('https://cdn.discordapp.com/attachments/327134378780262411/693088040121270322/yahoo_2.jpg')";
    document.getElementById('newpic2').style.backgroundImage="url('https://cdn.discordapp.com/attachments/327134378780262411/693088040121270322/yahoo_2.jpg')";
    document.getElementById('newpic3').style.backgroundImage="url('https://cdn.discordapp.com/attachments/327134378780262411/693088040121270322/yahoo_2.jpg')";
    document.getElementById('newpic4').style.backgroundImage="url('https://cdn.discordapp.com/attachments/327134378780262411/693088040121270322/yahoo_2.jpg')";
    document.getElementById('newpic5').style.backgroundImage="url('https://cdn.discordapp.com/attachments/327134378780262411/693088040121270322/yahoo_2.jpg')";
  } 
  if (pressed.join('').includes(konamiCode)) {
    console.log('virkni');
    document.getElementById('newpic1').style.backgroundImage="url('https://tskoli.is/wp-content/uploads/2017/11/Gunnar-Thorunnarson-150x150.jpg')";
    document.getElementById('newpic2').style.backgroundImage="url('https://tskoli.is/wp-content/uploads/2017/11/Gunnar-Thorunnarson-150x150.jpg')";
    document.getElementById('newpic3').style.backgroundImage="url('https://tskoli.is/wp-content/uploads/2017/11/Gunnar-Thorunnarson-150x150.jpg')";
    document.getElementById('newpic4').style.backgroundImage="url('https://tskoli.is/wp-content/uploads/2017/11/Gunnar-Thorunnarson-150x150.jpg')";
    document.getElementById('newpic5').style.backgroundImage="url('https://tskoli.is/wp-content/uploads/2017/11/Gunnar-Thorunnarson-150x150.jpg')";
  }
  console.log(pressed);
});

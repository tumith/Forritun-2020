"use strict"
/*let school = {
    name: "Tækniskolinn",
    classrooms: 30,
    occupiedClassrooms: 20,
    projector: "já",

    numberOfClassrooms(){
        let awelableClassrooms = this.classrooms - this.occupiedClassrooms;
        alert(awelableClassrooms);
    }
}
alert(school.numberOfClassrooms());*/

/*function draw() {
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
    }
  }*/

/*function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = 'rgb(200, 100, 750)';
        ctx.fillRect(60, 60, 50, 50);

        ctx.fillStyle = 'rgba(100, 50, 200, 2.5)';
        ctx.fillRect(90, 90, 90, 90);
    }
}*/

/*function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }
}*/

/*function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(90, 59);
        ctx.lineTo(50, 53);
        ctx.lineTo(60, 38);
        ctx.fill();
    }
}*/

function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
       var ctx = canvas.getContext('2d');
  
      ctx.beginPath();
      ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
      ctx.moveTo(110, 75);
      ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
      ctx.moveTo(65, 65);
      ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
      ctx.moveTo(95, 65);
      ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
      ctx.stroke();
    }
}
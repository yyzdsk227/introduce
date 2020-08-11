document.addEventListener("DOMContentLoaded", function () {
  //   // Handler when the DOM is fully loaded
  // $(document).ready(function () {
  var canvas = document.getElementById("canvas");

  console.log(canvas);

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  console.log(canvas.width);

  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;

  if (canvas.getContext) {
    console.log("a");
    var ctx = canvas.getContext("2d");

    var w = window.innerWidth;
    var h = window.innerHeight;
    ctx.strokeStyle = "rgba(174,194,224,0.5)";
    ctx.lineWidth = 1.5;
    ctx.lineCap = "round";

    var init = [];
    var maxParts = 1000;
    for (var a = 0; a < maxParts; a++) {
      init.push({
        x: Math.random() * w,
        y: Math.random() * h,
        l: Math.random() * 1,
        xs: -4 + Math.random() * 4 + 2,
        ys: Math.random() * 10 + 10,
      });
    }

    var particles = [];
    for (var b = 0; b < maxParts; b++) {
      particles[b] = init[b];
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (var c = 0; c < particles.length; c++) {
        var p = particles[c];
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
        ctx.stroke();
      }
      ctx.font = "77px malgun gothic";
      ctx.fillStyle = "rgba(255,194,224,0.5)";
      ctx.fillText("click below text  ", canvas.width / 8, canvas.height / 2);
      ctx.fillText(
        "play md's tic-tae-toc ",
        canvas.width / 8,
        canvas.height / 1.5
      );
      move();
    }

    function move() {
      for (var b = 0; b < particles.length; b++) {
        var p = particles[b];
        p.x += p.xs;
        p.y += p.ys;
        if (p.x > w || p.y > h) {
          p.x = Math.random() * w;
          p.y = -20;
        }
      }
    }

    setInterval(draw, 30);
  }
});

//출처: https://euntori7.tistory.com/356 [euntori.blog]

const FIXED_STEP = 16;

// Wind
const WIND_VELOCITY = -0.1; // Determines how slanted the rain drops fall, 0 = straight down

// Drop settings
const DROP_COUNT = 200; // Adjust for more/less rain drops
const DROP_WIDTH = 1; // Increase for thicker rain
const DROP_X_BUFFER = 50; // How far to the sides of the screen drops will spawn
const DROP_COLOR = "lightblue";
const DROP_MIN_VELOCITY = 0.3;
const DROP_MAX_VELOCITY = 0.6;
const DROP_MIN_LENGTH = 20;
const DROP_MAX_LENGTH = 40;
const DROP_MIN_ALPHA = 0.3;
const DROP_MAX_ALPHA = 1;

// Math helpers
var math = {
  // Random integer between min and max
  randomInteger: function (min, max) {
    return Math.round(Math.random() * (max - min) + min);
  },
  // Linear Interpolation
  lerp: function (a, b, n) {
    return a + (b - a) * n;
  },
  scaleVector: function (v, s) {
    v.x *= s;
    v.y *= s;
  },
  normalizeVector: function (v) {
    var m = Math.sqrt(v.x * v.x + v.y * v.y);
    math.scaleVector(v, 1 / m);
  },
};

// Initialize our canvas
var stage = document.createElement("canvas");
stage.width = 500;
stage.height = 300;
document.body.appendChild(stage);
var ctx = stage.getContext("2d");

var lastTime = 0;

// Collection of rain drops
var drops = [];

var initDrops = function () {
  for (var i = 0; i < DROP_COUNT; i++) {
    var drop = {};
    resetDrop(drop);
    drop.y = math.randomInteger(0, stage.height);
    drops.push(drop);
  }
};

// Reset a drop to the top of the canvas
var resetDrop = function (drop) {
  var scale = Math.random();
  drop.x = math.randomInteger(-DROP_X_BUFFER, stage.width + DROP_X_BUFFER);
  drop.vx = WIND_VELOCITY;
  drop.vy = math.lerp(DROP_MIN_VELOCITY, DROP_MAX_VELOCITY, scale);
  drop.l = math.lerp(DROP_MIN_LENGTH, DROP_MAX_LENGTH, scale);
  drop.a = math.lerp(DROP_MIN_ALPHA, DROP_MAX_ALPHA, scale);
  drop.y = math.randomInteger(-drop.l, 0);
};

var updateDrops = function (dt) {
  for (var i = drops.length - 1; i >= 0; --i) {
    var drop = drops[i];
    drop.x += drop.vx * dt;
    drop.y += drop.vy * dt;

    if (drop.y > stage.height + drop.l) {
      resetDrop(drop);
    }
  }
};

var renderDrops = function (ctx) {
  ctx.save();
  ctx.strokeStyle = DROP_COLOR;
  ctx.lineWidth = DROP_WIDTH;
  ctx.compositeOperation = "lighter";

  for (var i = 0; i < drops.length; ++i) {
    var drop = drops[i];

    var x1 = Math.round(drop.x);
    var y1 = Math.round(drop.y);

    var v = { x: drop.vx, y: drop.vy };
    math.normalizeVector(v);
    math.scaleVector(v, -drop.l);

    var x2 = Math.round(x1 + v.x);
    var y2 = Math.round(y1 + v.y);

    ctx.globalAlpha = drop.a;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
  }
  ctx.restore();
};

var render = function () {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, stage.width, stage.height);
  renderDrops(ctx);
};

var update = function (time) {
  var dt = time - lastTime;
  lastTime = time;
  if (dt > 100) {
    dt = FIXED_STEP;
  }

  while (dt >= FIXED_STEP) {
    updateDrops(FIXED_STEP);
    dt -= FIXED_STEP;
  }

  render();
  requestAnimationFrame(update);
};

initDrops();
requestAnimationFrame(update);

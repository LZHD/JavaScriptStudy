function Point(x, y) {
  this.x = x;
  this.y = y;
}

function Size(width, height) {
  this.width = width;
  this.height = height;
}

function Circle(origin, radius, angularVelocity) {
  this.origin = origin;
  this.radius = radius;
  this.angularVelocity = angularVelocity;
  this.angel = 0;
  this.draw = drawCircle;
}

function drawCircle(context) {
  context.save()
  context.beginPath();
  context.arc(this.origin.x, this.origin.y, this.radius, 0, Math.PI * 2, false);
  context.stroke();
  context.closePath();
  context.restore();
}

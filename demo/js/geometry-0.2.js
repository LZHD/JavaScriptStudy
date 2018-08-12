function Point(x, y) {
  this.x = x;
  this.y = y;
}

function Size(width, height) {
  this.width = width;
  this.height = height;
}

function Circle(origin, radius, angularVelocity, roundPath) {
  this.origin = origin;
  this.radius = radius;
  this.angularVelocity = angularVelocity ? angularVelocity : 0;
  this.roundPath = roundPath ? roundPath : null;
  this._angel = 0;
  this.draw = drawCircle;
  this.nextPosition = nextPosition;
}

Object.defineProperty(Circle.prototype, "angel", {
  get: function() {
    return this._angel;
  },
  set: function(newAngel) {
    this._angel = newAngel > Math.PI * 2 ? newAngel : newAngel - Math.PI * 2;
    this.origin.x = this.roundPath.origin.x + this.roundPath.radius * Math.cos(this._angel);
    this.origin.y = this.roundPath.origin.y + this.roundPath.radius * Math.sin(this._angel);
  }
});

function drawCircle(context) {
  context.save()
  context.beginPath();
  context.arc(this.origin.x, this.origin.y, this.radius, 0, Math.PI * 2, false);
  if (this.roundPath) {
    context.moveTo(this.roundPath.origin.x, this.roundPath.origin.y);
    context.lineTo(this.origin.x, this.origin.y);
  }
  context.stroke();
  context.closePath();
  context.restore();
}

function nextPosition(context) {
  if (this.roundPath && this.angularVelocity != 0) {
    this.angel = this.angel +  this.angularVelocity;
  }
  this.draw(context);
}

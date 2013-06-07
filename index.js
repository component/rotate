
module.exports = function(ctx, o){
  var x = o.x || 0;
  var y = o.y || 0;

  if (o.degrees) {
    o.radians = o.degrees * (Math.PI / 180);
  }

  ctx.translate(x, y);
  ctx.rotate(o.radians);
  ctx.translate(-x, -y);
};

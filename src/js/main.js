var canvas = document.getElementById("canvas");
    canvas.height = 250;
if (canvas.getContext){
  	var ctx = canvas.getContext('2d');
  	ctx.shadowColor = '#999';
    ctx.shadowBlur = 40;
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;
    var img = document.getElementById("tree");
    ctx.drawImage(img, 10, 10, 170, 150);
} else {
  // canvas-unsupported code here
}

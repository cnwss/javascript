var c = document.getElementById ("myCanvas");
                                //objectName.methodName ()
                                //The getElementById () methodName
                                //returns the element that has
                                //the ID attribute with the
                                // specified value.

var ctx = c.getContext ("2d");  // .getContext() method returns

var x = 250, y = 250, w = 40, h =40;
//randomRange(-10, 10);
var xSpeed;
var ySpeed;

var blobArray = [];
function make_xSpeed(value){
  if (value%2 == 0){
    xSpeed = Math.floor ((Math.random() * 10)+1);
  }
  else {
    xSpeed = Math.floor ((Math.random() * 10 )* -1);
  }
  return xSpeed;
}

function make_ySpeed(value){
  if (value%2 == 0){
    ySpeed = Math.floor ((Math.random() * 10) + 1);
  }
  else {
    ySpeed = Math.floor ((Math.random() * 10 ) * -1);
  }
  return ySpeed;
}
setInterval(draw, 30)

function draw (){
make_xSpeed(Math.floor((Math.random() * 10)+1));
make_ySpeed(Math.floor((Math.random() * 10)+1));



var blob = {x,y, xSpeed, ySpeed};
blobArray.push(blob);
ctx.clearRect(0,0, 1000,800);
for (var i = 0; i<blobArray.length; i++)
{
  blob = blobArray[i];
  ctx.fillStyle = "cyan";
  ctx.fillRect (blob.x, blob.y, w,h);
  blob.x =blob.x + blob.xSpeed;
  blob.y = blob.y + blob.ySpeed;
}
}

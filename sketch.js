var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600, 400);
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);
  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor = color(255);
  bullet.velocityX = speed;

  wall = createSprite(1200, 200, thickness, height / 2);
  wall.shapeColor = color(80, 80, 80);
}

function hasCollided(lwall, lbullet) {
  var bulletRightEdge = lbullet.x + lbullet.width;
  var wallLeftEdge = lwall.x;
  if (bulletRightEdge >= wallLeftEdge) {
    return true;
  } else {
    return false;
  }
}

function draw() {
  background(0);
  if (hasCollided(wall, bullet)) {
    bullet.velocityX = 0;

    var damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);
   
    if (damage > 10) {
      wall.shapeColor = color(255, 0, 0);
    } else {
      wall.shapeColor = color(0, 255, 0);
    }
  }

  drawSprites();
}

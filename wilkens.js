function wilkens() {
  
  let player = {
    x: 465,
    y: 595,
    size: 40,
    draw: function() {
      fill('red');
      ellipse(this.x, this.y, this.size, this.size);
    }
  };

  let miniMap = {
    x: 50,
    y: 50,
    size: 400,
    draw: function() {
      fill('orange');
      rect(this.x, this.y, this.size, this.size);
    }
  };

  let QuadZone = {
  x: 465,
  y: 595,
  size: 70,
  draw: function() {
    fill('black');
    rect(this.x, this.y, this.size, this.size);
  }
}; 

    this.setup = function () {
    
  }
  
  this.draw = function () {
    createCanvas(475, 619);
    QuadZone.draw();
    image(wilkensMap, 0, 0, 475, 619);
    player.draw();

    if(keyIsPressed){
      if(keyCode == LEFT_ARROW){
        player.x = player.x - speed;
      } else if (keyCode == RIGHT_ARROW){
        player.x = player.x + speed;
      }
      if (keyCode == UP_ARROW){
        player.y = player.y - speed;
      } else if (keyCode == DOWN_ARROW){
        player.y = player.y + speed;
    }  
  }

  let mapOn = false;

  if(keyIsPressed){
    if(keyCode == SHIFT){
      mapOn = true;
    } else {
      mapOn = false;
    }
  }

  if(mapOn == true){
    miniMap.draw();
  }

  let QuadDist = dist(player.x, player.y, QuadZone.x + QuadZone.size / 2, QuadZone.y + QuadZone.size / 2);
  if(QuadDist < 50) {
    this.sceneManager.showScene( Quad );
    player.x = 0;
    player.y = 30;
  }

  }

}
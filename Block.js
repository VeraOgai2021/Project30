class Block{
  constructor(x, y, width, height, visible, velocity) {
      var options = {
          restitution :0.4,
          friction :0.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visible = true;
      if((this.velocityX<3) && (this.velocityY<3)){
        this.visible=true;
      } else {
        this.visible=false;
      }
      World.add(world, this.body);
    }

    display(){
      var pos= this.body.position;
      this.image=loadImage("block.png");
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
    }
}
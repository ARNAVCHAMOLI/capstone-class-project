class Blocks {

   constructor(x,y){

      var blockoptions={
    restitution:1,
    friction:0.5,
            }  

this.x = x;
this.y = y;
this.width = 40;
this.height = 40;

this.boxes = Bodies.rectangle;(x,y,40,40);
World.add(world,this.boxes);

 }

   show(){

   
   var pos = this.boxes.position
   rect(pos.x,pos.y,40,40);
   push();

   translate(pos.x,pos,y);
   rotate(this.body.angle)
   rectMode(CENTER);
   rect(pos.x,pos.y,40,40);

   

   


   
   pop();






  }


    
 











}
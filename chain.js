class Chain{

   constructor(b,p){

      var chainoptions={
      length:35,
      stiffness:0.25,
      bodyA:b,
      pointA:p,
         }
         this.bodyA = b;
         this.pointA = p;

      this.rope = Matter.Constraint.create(chainoptions);
      World.add(world,this.rope);


}

show(){

  var PointA = this.pointA.position;
  var PointB = this.rope.bodyA.position;

   line(PointA.x,PointA.y,PointB.x,PointB.y);





}

   























}
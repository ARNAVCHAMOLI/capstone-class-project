class ground{

   constructor(x,y,width,height){
     
      var groundoptions={
         isStatic:true
      }
   this.x = x;
   this.y = y;
   this.width = width;
   this.height = height;

   this.Surface = Bodies.rectangle(x,y,width,height,groundoptions);
   World.add(world,this.Surface);


}

show(){

   rectMode(CENTER);
   var place = this.Surface.position;


   rect(place.x,place.y,this.width,this.height);

}









}
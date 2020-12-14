class Bob{
    constructor(x,y, radius) {
        var ball_options ={
         isStatic: true    
        } 
         
        this.body = Bodies.circle(x,y,radius, ball_options); 
        this.width = width;
        this.height = height;
        World.add(world,this.body);

        
    }

    display(){

    var pos = this.body.position;
    rectMode(CENTER);
    circle(pos.x,pos.y,width,height);
        
    }
}
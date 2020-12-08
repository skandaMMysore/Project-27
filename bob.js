class bob {
    constructor(x,y,diameter){
        var options={
            isStatic:true,
           
        }
        this.body = Bodies.circle(x,y,diameter,options);
        
        this.diameter = diameter;
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        fill("purple");
        circle(pos.x,pos.y,this.diameter);
    }

}
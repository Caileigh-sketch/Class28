class Slingshot
{
    constructor(A,pointB)
    { 
        var options = {
            bodyA: A,
            pointB: pointB,
            stiffness: 0.05,
            length: 30,
        }
       this.pointB = pointB
       this.sling = Max.create(options)
       World.add(world, this.sling);
    }

    fly(){
    this.sling.bodyA = null 
    }

    display()
    { 
        if (this.sling.bodyA){
            line(this.sling.bodyA.position.x, this.sling.bodyA.position.y,
                this.pointB.x, this.pointB.y)
        }
        
    }
} 

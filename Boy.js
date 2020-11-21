class Boy extends Mango
{
    constructor(x,y)
    {
        var options = 
        {
            isStatic:true,
            restitution:0,
            friction:1,
        }
      super(x,y,50,50);
      this.image = loadImage("Plucking Mangoes/boy.png");
    } 
    display()
    {
        super.display();
        display()
        {
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
        }
    }
}
// Maam I have written like this that this class is extended by that class. Can you tell me is it correct or not?
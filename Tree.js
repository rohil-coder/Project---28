class Tree extends Mango
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
      this.image = loadImage("Plucking Mangoes/tree.png");
    } 
    display()
    {
        super.display();
    }
}
// Maam I have written like this that this class is extended by that class. Can you tell me is it correct or not?
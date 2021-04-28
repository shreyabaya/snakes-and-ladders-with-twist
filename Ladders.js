
class Ladders{
    constructor(){
        this.list = []
        this.image=loadImage("ladder.png");
    }
    draw(){
        push()
        strokeWeight(5)
        stroke(0,255,0)
        let l1 = new Line(new Point(2,1),new Point(1,4))
        this.list.push(l1)
        l1.draw()

        let l2 = new Line(new Point(1,1),new Point(4,4))
        this.list.push(l2)
        l2.draw()
        pop()

    }
}

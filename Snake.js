class Snakes{
    constructor(){
        this.list = []
        this.image=loadImage("snake.jpg");
    }
    draw(){
        push()
        strokeWeight(5)
        stroke("red")
        let l1 = new Line(new Point(1,0),new Point(1,2))
        this.list.push(l1)
        l1.draw()

        let l2 = new Line(new Point(4,2),new Point(2,5))
        this.list.push(l2)
        l2.draw()
        pop()

    }
}
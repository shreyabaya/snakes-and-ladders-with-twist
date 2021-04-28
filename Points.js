class Point{
    constructor(x,y){
        this.x = x
        this.y = y
    }
}

class Line{
    constructor(p1,p2){
        this.p1 = p1
        this.p2 = p2
    }
    draw(){
        let boxWidth  = width/NX
        let boxHeight = height/NY

        line(this.p1.x*boxWidth+(boxWidth/2),this.p1.y*boxHeight+(boxHeight/2),this.p2.x*boxWidth+(boxWidth/2),this.p2.y*boxHeight+(boxHeight/2))
    
       
    }
}
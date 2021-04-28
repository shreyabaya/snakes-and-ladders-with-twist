class Player{
    constructor(snakes,ladders){
        this.x = 0
        this.y = 0
        this.On = true
        this.snakes = snakes
        this.ladders = ladders
    }
    draw(){
        let boxWidth  = width/NX
        let boxHeight = height/NY
        fill("yellow")
        let drawX;
        let drawY;
        if(this.On){
            drawX = this.x
        }else{
            drawX = (NX-1)-this.x
        }
        drawY = (NY-1) - this.y
        this.snakes.draw()
        this.ladders.draw()
        circle(drawX*boxWidth+(boxWidth/2),drawY*boxHeight+(boxHeight/2),50,50)
        if(this.x==4 && this.y==5){
            this.x = 0
            this.y = 0
            this.On = true

    }}

    async takeStep(n){
        
        for (let index = 0; index < n; index++) {
            if(this.x<NX-1){
                this.x++
            }else{
                if(this.y<NY-1){
                    this.y++
                    this.x = 0 
                    this.isOn = !this.isOn
                }
            }
            await new Promise(r => setTimeout(r, 100));
        }

        let drawx;
        let drawy;
        if(this.isOn){
            drawx = this.x
        }else{
            drawx = (NX-1)-this.x
        }
        drawy = (NY-1) - this.y
        var ludo=snake.p1
        this.snakes.list.forEach(snake => {
            if(drawx==ludo.x && drawy==ludo.y){
                drawx = snake.p2.x
                drawy = snake.p2.y
                if(this.isOn){
                    this.x = drawx
                }else{
                    this.x = (NX-1)-drawx
                }
                this.y = (NY-1) - drawy
                if(this.y%2==0){
                    this.isOn = true
                }else{
                    this.isOn = false
                }
            }
        });

        this.ladders.list.forEach(ladder => {
            if(drawx==ladder.p2.x && drawy==ladder.p2.y){
                drawx = ladder.p1.x
                drawy = ladder.p1.y
                this.x = drawx
                this.y = (NY-1) - drawy
                if(this.y%2==0){
                    this.isOn = true
                }else{
                    this.isOn = false
                }
            }
        });

        
    }

}

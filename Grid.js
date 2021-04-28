class Grid{
    constructor(nx,ny){
        this.nx = nx
        this.ny = ny
    }
    draw(){
        var boxWidth  = width/this.nx
        var boxHeight = height/this.ny
        var On = true
        for (var y = 0; y < this.ny; y++) {
            for (var x = 0; x < this.nx; x++) {
                if(On){
                    fill("cyan")
                    On = false;
                }else{
                    fill("magenta")
                    On = true
                }
                rect(x*boxWidth,y*boxHeight,boxWidth,boxHeight)
            }
        }

    }
}

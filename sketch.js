
var grid;
var player;
var NX = 5
var NY = 6
var diceRoll = 0
var snakes
var ladders
var dinoAnimation

function preload(){
    dinoAnimation = loadAnimation("dinoanim.gif")
}


function setup(){
    createCanvas(displayHeight,displayWidth-700)
    grid = new Grid(NX,NY)
    snakes = new Snakes()
    ladders = new Ladders()
    player = new Player(snakes,ladders)
}

function draw(){
    background("red");
    grid.draw()
    player.draw()
    fill(0)
    textSize(24)
    text("END",width-110,50)

    fill(0)
    textSize(24)
    text("Dice: "+diceRoll,width-690,height-525)

    fill(0)
    textSize(24)
    text("START",width-690,height-40)


}

function mousePressed(){
    diceRoll = Math.round(map( random(),0,1,1,6) )
    player.takeStep(diceRoll)
    console.log(diceRoll);
}









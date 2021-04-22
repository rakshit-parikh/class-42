var boy,mask,covid,sanitizer,road
var score=0

function preload(){
roadImage=loadImage("Road.png")
boyImage=loadAnimation("Runner-1.png","Runner-2.png")
maskImage=loadImage("mask.png")
covidImage=loadImage("covid.png")
sanitizerImage=loadImage("sanitizer.png")
}








function setup(){
    createCanvas(400,600)
road=createSprite(200,200 )
boy=createSprite(70,580,20,20)
boy.addAnimation("running",boyImage)
road.addImage(roadImage)
boy.scale=0.08
road.scale=0.5
road.velocityY=5
}







function draw(){
    background(0)
    boy.x=mouseX
createMask()
createCovid()
createSanitizer()
if(road.y>400){
    road.y=height/2
}
drawSprites()
fill("white")
textSize(20)
text("score- "+score,300,30)
}
function createMask(){
    mask=createSprite(Math.round(random(50,350),40,10,10))
    mask.addImage(maskImage)
    mask.scale=0.03
    mask.velocityY=4
    mask.lifetime=150
}

function createCovid(){
    covid=createSprite(Math.round(random(50,350),40,10,10))
    covid.addImage(covidImage)
    covid.scale=0.04
    covid.velocityY=4
    covid.lifetime=150
}

function createSanitizer(){
    sanitizer=createSprite(Math.round(random(50,350),40,10,10))
    sanitizer.addImage(sanitizerImage)
    sanitizer.scale=0.03
    sanitizer.velocityY=4
    sanitizer.lifetime=150
}
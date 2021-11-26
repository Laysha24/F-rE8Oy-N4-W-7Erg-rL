var bg , bluewaterimg , bluediamondimg , femalegateimg , fireboyimg , greenwaterimg , groundimg , malegateimg ;
var reddiamondimg , wallimg , redwaterimg , watergirlimg , wall2img , supportimg ; 

var fireboy , watergirl ;
var wall1, wall2 , ground , ground2 , fenalegate , malegate , gameover , gameoverimg , roof , roof2 , invisibleground , restart;
var watergirlground , fire , fire2 , fire3 , water2 , water3 ,  water , support , support2 , ground4 ,  greenwater , greenwater2 ;
var gameState = "PLAY" ;

function preload() {
  bg = loadImage("Images/back ground.jpeg")
  bluewaterimg = loadImage("Images/blue water.png")
  bluediamondimg = loadImage("Images/blue_diamond.png")
  femalegateimg = loadImage("Images/male gate.png")
  fireboyimg = loadImage("Images/Fireboy-0.png")
  greenwaterimg = loadImage("Images/green water.jpg")
  groundimg = loadImage("Images/ground.jpeg")
  malegateimg = loadImage("Images/female gate.png")
  reddiamondimg = loadImage("Images/red_diomand.png")
  wallimg = loadImage("Images/wall.jpeg")
  redwaterimg = loadImage("Images/water.png")
  watergirlimg = loadImage("Images/watergirl.png")
  wall2img = loadImage("Images/wall 2.png")
  supportimg = loadImage("images/support.png")
  gameoverimg = loadImage("images/game over.png")
}

function setup() {
  createCanvas(displayWidth , displayHeight-120);
  fireboy = createSprite(170,665)
  fireboy.addImage(fireboyimg)
  fireboy.scale = 0.04

  watergirl = createSprite (180,532)
  watergirl.addImage(watergirlimg)
  watergirl.scale = 0.4
  watergirl.debug = true
  watergirl.setCollider("rectangle",0,0,40,260)
  
  wall1 = createSprite(0,355) 
  wall1.addImage(wallimg)
  wall1.scale = 2
  
  ground = createSprite(330,740)
  ground.addImage(groundimg)
  ground.scale = 2

  watergirlground = createSprite(160,600)
  watergirlground.addImage(groundimg)
  watergirlground.scale = 1.5

  ground2 = createSprite(1040,740)
  ground2.addImage(groundimg)
  ground2.scale = 2

  ground3 = createSprite(1500,740)
  ground3.addImage(groundimg)
  ground3.scale = 2
  
  wall2 = createSprite(1540,355) 
  wall2.addImage(wall2img)
  wall2.scale = 1.5
  
  water = createSprite(940,742) 
  water.addImage(bluewaterimg)
  water.scale = 2
 // water.debug = true

  fire = createSprite(660,740) 
  fire.addImage(redwaterimg)
  fire.scale = 1.2
  //fire.debug = true

  support = createSprite(1410,655) 
  support.addImage(supportimg)
  support.scale = 2.5
  //support.debug = true
  support.setCollider("circle",30,0,30)

  bluediamond = createSprite(940,690)
  bluediamond.addImage(bluediamondimg)
  bluediamond.scale = 0.1

  reddiamond = createSprite(650,690)
  reddiamond.addImage(reddiamondimg)
  reddiamond.scale = 0.1

  ground4 = createSprite(330,455)
  ground4.addImage(groundimg)
  ground4.scale = 2

  ground5 = createSprite(930,455)
  ground5.addImage(groundimg)
  ground5.scale = 2

  ground8 = createSprite(600,250)
  ground8.addImage(groundimg)
  ground8.scale = 2

  ground9 = createSprite(1170,250)
  ground9.addImage(groundimg)
  ground9.scale = 2

    water2 = createSprite(950,250) 
    water2.addImage(bluewaterimg)
    water2.scale = 2

 

  water3 = createSprite(660,455) 
  water3.addImage(bluewaterimg)
  water3.scale = 2


  fire2 = createSprite(980,455) 
  fire2.addImage(redwaterimg)
  fire2.scale = 1.2

  fire3 = createSprite (600,250)
  fire3.addImage(redwaterimg)
  fire3.scale = 1.2

  

  bluediamond2 = createSprite(950,200)
  bluediamond2.addImage(bluediamondimg)
  bluediamond2.scale = 0.1

  

  bluediamond4 = createSprite(660,410)
  bluediamond4.addImage(bluediamondimg)
  bluediamond4.scale = 0.1


 
  greenwater2 = createSprite(280,450)
  greenwater2.addImage(greenwaterimg)
  greenwater2.scale = 1.4

  malegate = createSprite(1320,200)
  malegate.addImage(malegateimg)
  malegate.scale = 2.4

  femalegate = createSprite(1455,200)
  femalegate.addImage(femalegateimg)
  femalegate.scale = 2.4

  reddiamond2 = createSprite(600,200)
  reddiamond2.addImage(reddiamondimg)
  reddiamond2.scale = 0.1

  reddiamond4 = createSprite(980,410)
  reddiamond4.addImage(reddiamondimg)
  reddiamond4.scale = 0.1

  support2 = createSprite(1365,690,70,70)
  support2.debug =true
  support2.visible = false

 gameover = createSprite(750,350)
 gameover.addImage(gameoverimg)
 gameover.scale = 1.2
gameover.visible = false

roof = createSprite(380,10)
roof.addImage(groundimg)
roof.scale = 2
roof.visible = false

roof2 = createSprite(1000,10)
roof2.addImage(groundimg)
roof2.scale = 2
roof2.visible = false

invisibleground = createSprite(510,470,1500,10)
invisibleground.visible = false

restart = createSprite(750,450,150,50);
restart.visible = false


}

function draw() {
  background(bg); 
  text (mouseX+","+mouseY,mouseX,mouseY) 
  console.log(gameState)
  if(gameState === "PLAY"){

  
  if (keyDown ( RIGHT_ARROW)) {
    fireboy.x = fireboy.x+5
  }

  if (keyDown ( LEFT_ARROW)) {
    fireboy.x = fireboy.x-5
  }

  if (keyDown ( "A")) {
    watergirl.x = watergirl.x-5
  }

  if (keyDown ( "d")) {
    watergirl.x = watergirl.x+5
  }

  if (keyDown ( "w")) {
    watergirl.velocityY = watergirl.velocityY-5
  }

  if (keyDown ( UP_ARROW)) {
    fireboy.velocityY = fireboy.velocityY-5
  }

if(watergirl.isTouching(greenwater2)){
 gameState = "END" 
}

if(watergirl.isTouching(fire)){
gameState = "END" 
}

if(watergirl.isTouching(fire2)){
  gameState = "END" 
}

if(watergirl.isTouching(fire3)){
gameState = "END" 
}

if(watergirl.isTouching(bluediamond2)){
  bluediamond2.destroy()
}

if(watergirl.isTouching(bluediamond4)){
  bluediamond4.destroy()
}

//if(watergirl.isTouching(fenalegate)){
//text = "You won"
//}

if(watergirl.isTouching(bluediamond)){
  bluediamond.destroy()
}

if(fireboy.isTouching(greenwater2)){
 gameState = "END"
}

if(fireboy.isTouching(water)){
gameState = "END"
}

if(fireboy.isTouching(water2)){
  gameState = "END"
  }

  if(fireboy.isTouching(water3)){
    gameState = "END"
    }

if(fireboy.isTouching(reddiamond)){
  reddiamond.destroy()
}

if(fireboy.isTouching(reddiamond2)){
  reddiamond2.destroy()
}

if(fireboy.isTouching(reddiamond4)){
  reddiamond4.destroy()
}

if(mousePressedOver(restart)) {
reset()

}





  fireboy.velocityY += 2.3
  watergirl.velocityY += 2.3

  fireboy.collide(ground)
  fireboy.collide(ground2)
  fireboy.collide(ground3)
  fireboy.collide(ground4)
  fireboy.collide(ground5)
  fireboy.collide(roof)
  fireboy.collide(roof2)
  fireboy.collide(ground8)
  fireboy.collide(ground9)
  fireboy.collide(wall2)
  fireboy.collide(wall1)
  fireboy.collide(watergirl)
  fireboy.collide(invisibleground)

  watergirl.collide(ground)
  watergirl.collide(ground2)
  watergirl.collide(ground3)
  watergirl.collide(ground4)
  watergirl.collide(ground5)
  watergirl.collide(roof)
  watergirl.collide(roof2)
  watergirl.collide(ground8)
  watergirl.collide(ground9)
  watergirl.collide(watergirlground)
  watergirl.collide(wall1)
  watergirl.collide(wall2)
  watergirl.collide(support)  
  watergirl.collide(fireboy)
  watergirl.collide(invisibleground)

if(fireboy.isTouching(support)) {
  fireboy.collide(support)
  fireboy.velocityY = 0
}

if(watergirl.isTouching(support)) {
  watergirl.collide(support)
  watergirl.velocityY = 0
}



fireboy.collide(support2)
  }
if(gameState === "END"){
  
  gameover.visible = true
  fireboy.destroy()
  watergirl.destroy()
 background(0)
}
  drawSprites();
}

function reset(){
  gameState = "PLAY";
  gameOver.visible = false;
}


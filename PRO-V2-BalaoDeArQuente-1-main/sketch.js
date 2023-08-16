var backgroundImg;
var bird, birdImg;
var frutas,frutasGroup, uva, morango, maça, limão;
var cano,canos, cano1, canoDuplo, canoGroup;

var pontos;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
  backgroundImg = loadImage("assets/bg.png");
  birdImg = loadImage("assets/bird.jpg");
  uva = loadImage("assets/uva.png");
  morango = loadImage("assets/morango.png");
  maça = loadImage("assets/maça.png")
  limão = loadImage("assets/limão.png");
  cano1 = loadImage("assets/cano1.png");
  canoDuplo = loadImage("assets/cano duplo.png");
}

function setup(){
  createCanvas(1000,400);
  bird = createSprite(100,200,20,50);
  bird.addImage("bird",birdImg);
  bird.scale = 0.1

  canos = new Group();
  frutasGroup = new Group();

  pontos = 0;

  

}


function draw(){
  
  bird.debug=true;
  background(backgroundImg);
  fill("black");
  textSize(20);
  text("pontuação: "+pontos,40,50);


  if(gameState===PLAY){
    if(keyDown("space")){
      bird.velocityY = -10; 
    }
    bird.velocityY +=2;
    if(frutasGroup.isTouching(bird)){
      for(var i=0;i<frutasGroup.length;i++){
        if(frutasGroup[i].isTouching(bird)){
          frutasGroup[i].destroy();
        pontos+=1;
        }
        
      }
    }
    criarCanos();
    criarFrutas();
  }

  drawSprites();


}

function criarCanos(){
  if(frameCount%60 === 0){
    y = Math.round(random(200,300));
     cano = createSprite(1450,y,40,40);
    cano.addImage("cano",canoDuplo);
    cano.scale = 1.2;
    cano.lifetime = 250;
    cano.velocityX = -6;
    canos.add(cano);
    cano.debug=true;
   
    
  }
}
function criarFrutas(){
  if(frameCount%60 ===0){
    var frutas = createSprite(cano.x,cano.y-30);
    frutas.scale = 0.2
    frutas.lifetime = 250;
    frutas.velocityX = -6;
    var rand = Math.round(random(1,4));
    switch(rand){
      case 1: frutas.addImage(uva);
      break;
      case 2: frutas.addImage(limão);
      break;
      case 3: frutas.addImage(maça);
      break;
      case 4: frutas.addImage(morango);
      break;
      default: break;

    } 
    frutasGroup.add(frutas);
  }
}










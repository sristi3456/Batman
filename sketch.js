const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;
var batAnimation,bat;
var drops;
var bmImg;

var engine, world;

var rand;



var thunderCreatedFrame=0;



function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);
    umbrella = new Umbrella(200,500);

    var maxdrops = 100 ;
    for (var i = 0; i<maxdrops;i++){
        drops.push (new createDrop(random (0,400), random (0,400)))
    }
   
    
}

function draw(){
    Engine.update(engine);
    background(0); 

    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }
    bat= createSprite(Math.round(random(0,400)),Math.round(random(0,400)));
    bat.addAnimation("moving_bat",batAnimation);
    bat.visible = false;
    if(frameCount % 100 === 0){
       bat.visible = true;
        bat.velocityX = Math.round(random(-4,4));
        bat.velocityY = Math.round(random(-4,4));
        bat.scale=0.4;  
    }
    if(frameCount >= 200)
    image(this.batmanImg, pos.x , pos.y+70,200,300);
    

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();

    drops.display();
    drops.update();
   

    drawSprites();
}   
update();{
    if (this.drops.position.y > height){
        Matter.Body.setPosition(this.rain ,{x:random(0,400), y:random(0,400)})
    }
    }


    


function draw(){
    Engine.update(engine);
    background(0); 

    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }
    bat= createSprite(Math.round(random(0,400)),Math.round(random(0,400)));
    bat.addAnimation("moving_bat",batAnimation);
    bat.visible = false;
    if(frameCount % 100 === 0){
       bat.visible = true;
        bat.velocityX = Math.round(random(-4,4));
        bat.velocityY = Math.round(random(-4,4));
        bat.scale=0.4;  
    }
    if(frameCount >= 200)
    image(this.batmanImg, pos.x , pos.y+70,200,300);
    

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();

    drops.display();
    drops.update();
   

    drawSprites();
}   
update();{
    if (this.drops.position.y > height){
        Matter.Body.setPosition(this.rain ,{x:random(0,400), y:random(0,400)})
    }
    }



  


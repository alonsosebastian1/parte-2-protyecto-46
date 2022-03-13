var backgroundImg,platform;
var barcoimg,barco;
var cañonimg,cañon;
var pirataimg,pirata;
var ballimg,ball;
var coin,coinimg;
var mira,miraimg;
var cofre_cerradoimg,cofre,cofre_abiertoimg;
var nubes,nubesimg;
var pirata1img,pirata1;
var pirata2img,pirata2;
var gameOver,gameOverimg;
var barcoSound;
var cañonSound;




function preload() {
    backgroundImg = loadImage("fondo1.1.png");
    barcoimg = loadImage("barco1.1.png");
    cañonimg = loadImage("cañon1.1.png");
    pirataimg = loadImage("pirata1.1.png");
    coinimg = loadAnimation("coin1.png","coin2.png","coin3.png","coin4.png","coin5.png","coin6.png");
    miraimg = loadImage("mira.png");
    cofre_cerradoimg = loadImage("cofre_cerrado.png");
    cofre_abiertoimg = loadAnimation("cofre_abierto.png");
    nubesimg = loadImage("images.jpeg.jfif");
    pirata1img = loadImage("pirata0.png");
    pirata2img = loadImage("imported piskel.gif");
    ballimg = loadImage("Cannon_Ball.png");
    gameOverimg = loadImage("gameoverimg.png");
    cañonSound = loadSound("Cañon de mano sonido(MP3_320K).mp3");
    barcoSound = loadSound("Efecto de sonido de madera rompiéndose(MP3_320K).mp3");
    }

    function setup(){
        var canvas = createCanvas(1350,400);
        
    
       cañon = createSprite(80,330);
       cañon.addImage(cañonimg);
       cañon.scale = 0.2;
    
       pirata = createSprite(150,360);
   pirata.addImage(pirataimg);
   pirata.scale = 0.2;

   coin = createSprite(28,15);
   coin.addAnimation("moneda",coinimg);
   coin.scale = 0.2;


   mira = createSprite(1,1);
   mira.addImage(miraimg);
   mira.scale = 0.2;

   cofre= createSprite(220,360);
   cofre.addImage(cofre_cerradoimg);
   cofre.scale = 0.2;
   cofre.setCollider("circle",0,0,50);
    cofre.debug = false;


    }
    function draw(){
        background(nubesimg);
            background(backgroundImg);
            
    
            mira.x = mouseX;
            mira.y = mouseY;
            cañon.y = mouseY;
       
    drawSprites(); 
    spawnbarco();
    spawnenemy();
     

    }
    function spawnbarco(){
        if(frameCount % 200 === 0){
            barco = createSprite(1100,150);
            barco.addImage(barcoimg);
            barco.scale = 0.3;
            barco.velocityX = -3;
            barco.lifetime = 370;
           
            barco.setCollider("circle",0,0,200);
            barco.debug = false;
        }
    }
    function spawnenemy(){
        if(frameCount % 100 === 0){
            enemy = createSprite(1100,360);
            enemy.addImage(pirata1img);
            enemy.scale = 0.05;
            enemy.velocityX = -3;
            enemy.lifetime = 300;
           
            enemy.setCollider("circle",0,0,600);
            enemy.debug = true;
        }
    }
    function balas(){
        if(frameCount %5 === 0){
            bala = createSprite(80,360);
            bala.addImage(ballimg);
            bala.y = cañon.y -30;
            bala.x = cañon.x +60;
            bala.scale = 0.2
            bala.velocityX = 12;
           bala.lifetime = 250;
     
       }
        
    }
   
       

        if(mira.isTouching(enemy)){
            balas();   
      
          }
          if(mousePressedOver(barco)){
            balas();
       
        }
        
        if(ballGroup.isTouching(enemy)){
         
           
         }
         if(ballGroup.isTouching(barco)){
  
         
           
          }

       
          
       

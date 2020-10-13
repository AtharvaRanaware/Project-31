
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,ground2,ground3,ground4;
var bar1,bar2,bar3,bar4,bar5,bar6;

var particles=[];
var plinkos=[];
var divisions=[];



function setup() {
  createCanvas(480,800);
   
	engine = Engine.create();
  world = engine.world;
  
  
ground1=new Ground (240,790,480,20);
ground2=new Ground (240,10,480,20);
ground3=new Ground (10,400,20,800);
ground4=new Ground (470,400,20,800);

bar1=new Bar (240,780,480,20);

bar2=new Bar (104,622,10,300);

bar3=new Bar (188,622,10,300);

bar4=new Bar (272,622,10,300);

bar5=new Bar (360,622,10,300);

//bar6=new Bar (104,622,10,300);

for (var j=40; j<=width; j=j+50) {

plinkos.push(new Plinko(j,75));


}


for (var j=15; j<=width-10; j=j+50) {

  plinkos.push(new Plinko(j,175));
  
  
  }

  

for (var j=40; j<=width; j=j+50) {

  plinkos.push(new Plinko(j,275));
  
  
  }

  

for (var j=15; j<=width-10; j=j+50) {

  plinkos.push(new Plinko(j,375));
  
  
  }


  
}









function draw() {
  background("black");  

  Engine.update(engine);
  text (mouseX+","+mouseY,mouseX,mouseY);
  
bar1.display();
ground1.display();
ground2.display();
ground3.display();
ground4.display();

bar2.display();
bar3.display();
bar4.display();
bar5.display();

spawnParticles();
//for displaying for loop
for (var j=0; j<plinkos.length; j++) {

  plinkos[j].display();
  
  
  }


  for (var i=0; i<particles.length; i++) {

  particles[i].display();
  
  
  }




  drawSprites();
}

function spawnParticles () {

if (frameCount%60===0){

particles.push(new Particle(random(width/2-10,width/2+10),10,10));

}




}
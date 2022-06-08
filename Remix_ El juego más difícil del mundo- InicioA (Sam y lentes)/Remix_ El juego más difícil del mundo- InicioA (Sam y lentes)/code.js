var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ae2c2cb0-25ed-4814-9fc6-5eda34415010"],"propsByKey":{"ae2c2cb0-25ed-4814-9fc6-5eda34415010":{"name":"car_blue_1","sourceUrl":null,"frameSize":{"x":71,"y":131},"frameCount":2,"looping":true,"frameDelay":12,"version":"3KEhkw5y6jIdukUuIGH4wndY8jCSiPwy","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":142,"y":131},"rootRelativePath":"assets/ae2c2cb0-25ed-4814-9fc6-5eda34415010.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;



  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  car1.setAnimation("car_blue_1");
  car1.scale=0.15;
   car2.setAnimation("car_blue_1");
  car2.scale=0.15;
   car3.setAnimation("car_blue_1");
  car3.scale=0.15;
   car4.setAnimation("car_blue_1");
  car4.scale=0.15;
  
 
//Agrega velocidad para hacer que el auto se mueva.
 car1.velocityY=8;
  car2.velocityY=8;
  car3.velocityY=-8;
  car4.velocityY=-8;
  
  
function draw() {

   background("black");
   textSize(20);
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
 car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
   car2.bounceOff(boundary1);
    car2.bounceOff(boundary2);
     car3.bounceOff(boundary1);
      car3.bounceOff(boundary2);
       car4.bounceOff(boundary1);
        car4.bounceOff(boundary2);
         
  
  
  
  if (keyDown("RIGHT_ARROW")){

sam.x=sam.x+2;
  }
  
  if (keyDown("LEFT_ARROW")){
 
    sam.x=sam.x-2;
  }

if (sam.isTouching(car1)||sam.isTouching(car2)||sam.isTouching(car3)||sam.isTouching(car4)){
sam.x=20;
sam.y=190;
life=life+1;
}



  
// Crea la función bounceoff para hacer que el auto rebote en los límites.
//Agregar la condición para hacer que Sam se mueva de izquiera a derecha.
//Agregar la condición de reducir la vida de Sam si toca el carro.
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

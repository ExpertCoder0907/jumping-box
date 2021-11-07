function bounceoff(object1, object2) {
    if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
    if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
  }
function isTouching(object1, object2) { 
    if(mouse.x - cat.x < cat.width/2 + mouse.width/2
    && cat.x - mouse.x < cat.width/2 + mouse.width/2
    && mouse.y - cat.y < cat.height/2 + mouse.height/2
    && cat.y - mouse.y < cat.height/2 + mouse.height/2){}}
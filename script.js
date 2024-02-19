/**
 * Project 1 - Interactive Image
 * Name: Ahni Cazenave
 * Description of Image: My image is a beige colored dog, with a white belly. The dog moves 
 * across the bottom of the canvas constantly unless certain conditions are met. 
 * Description of Interactions: One interaction is when pressing the up arrow it will move 
 * the position of the tail to create a wagging motion. Another interaction is when pressing 
 * the mouse, the dog will follow where the mouse goes.
 * Date completed: February 14, 2023 
 */

var x = 0; 
var y = 0;

function setup(){
  // this function will run once
  createCanvas(600, 400); // create a 600x400 pixel drawing canvas

}

function draw(){
  // this function runs again and again (60x per second)
  background(200); //light gray background
  push(); //creat image layer
  translate(x, y);
    if(mouseIsPressed){
     x = mouseX
     y = mouseY //check each frame to see if the mouse is pressed, then make image follow mouse
  } else {
     x ++;
     if(x > width){
     x = 0;
    }
      y = 290; 
      if(y > height){
      y = 0;
    } // make image move across bottom of canvas if the mouse is NOT pressed
   }
  
  fill(234, 221, 202); // beige dog color
  //tail
  if(keyIsDown(UP_ARROW)){ 
    triangle(85, -20, 45, 45, 20, 35);//makes tail move 20 pixels to right (wagging motion)
  } else {
    triangle(65, -20, 45, 45, 20, 35);//resting tail when mouse NOT pressed 
  }
  //back legs
  quad(-95, 75, -40, 45, -50, 90, -80, 105); //left dog back leg
  quad(40, 45, 95, 75, 80, 105, 50, 90); //right dog back leg
  //body
  quad(-30, -15, 30, -15, 60, 95, -60, 95); //dog body background
  fill(240); // white/grey belly color
  ellipse(0, 45, 50, 60); //belly 
  strokeWeight(.75); //front legs stroke
  line(-40, 40, -50, 90); //left line of front left leg
  line(-50, 90, -20, 90); //bottom line of front left leg
  line(-20, 90, -15, 40); //right line of front left leg
  line(15, 40, 20, 90); //left line of front right leg
  line(20, 90, 50, 90); //bottom line of front left leg
  line(50, 90, 40, 40); //right line of front right leg
  //ears
  strokeWeight(.5); //stroke weight for everything besides front legs
  fill(234, 221, 202); // beige dog color
  ellipse(-25, -135, 25, 50); //left dog ear
  ellipse(25, -135, 25, 50); //right dog ear
  fill(243, 207, 198); //inner ear pink color 
  ellipse(-25, -130, 15, 35); //left inner dog ear
  ellipse(25, -130, 15, 35); //right inner dog ear
  //head
  fill(234, 221, 202); // beige dog color
  quad(-35, -115, 35, -115, 60, -15, -60, -15); //dog head
  fill(0); // eyes and nose black color
  ellipse(-20, -85, 15); //left eye iris
  ellipse(20, -85, 15); //right eye iris
  ellipse(0, -45, 30, 20); //nose
  fill(255); // eyes white color 
  ellipse(-20, -87, 9); //left eye pupil
  ellipse(20, -87, 9); //right eye pupil
  pop(); // dispose of image
  
}

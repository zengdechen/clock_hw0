let w = 800
let h = 600
let r = 500

function setup() {
	createCanvas(w,h); // make an HTML canvas element width x height pixels
}

function draw() {  
background(240);  
noFill();  


// get second angle with smooth
cur_s = second() + new Date().getMilliseconds()/1000;
cur_s = map(cur_s,0,60, 0, 2*PI)

// get minute angle with smooth
cur_m = minute() + second()/60
cur_m = map(cur_m,0,60, 0, PI*2)

// get hour angle with smooth
cur_h = hour() + minute()/60
cur_h = map(cur_h, 0,24, 0, PI*2)

// draw second ring
strokeWeight(40);  
stroke(255, 98, 79);  
arc(w/2,h/2,r,r,1.5*PI,1.5*PI+cur_s);  

// draw minute ring
strokeWeight(40);  
stroke(127, 217, 100);  
arc(w/2,h/2,r-80,r-80,1.5*PI,1.5*PI+cur_m);  


// draw hour ring
strokeWeight(40);  
stroke(59, 170, 255);  
arc(w/2,h/2,r-160,r-160,1.5*PI,1.5*PI+cur_h);  

}  

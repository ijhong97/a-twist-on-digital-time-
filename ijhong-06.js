// Isabella Hong
// Section A
// ijhong@andrew.cmu.edu
// Project-06

function setup() { 
	createCanvas(700, 500);
}

function draw() {
	//current hour, minute, and second of the day 
	var h = hour()%12; 
	var m = minute(); 
	var s = second(); 
	//light orange background 
	background(255, 250, 195);
	//loop orange function (hour) 
	var x = 32; 
	for (var i = 0; i < h; i++) {
		orange(x, 90); 
		x += 58;  
	}
	//loop apple function (min)
	var a = 0;
	for (var y = 175; y <= 275; y += 50) {
		for (var x = 17; x < width; x += 35) {
			if (a < m) {
				apple(x, y); 
			}
			else {
				break;
			}
			a += 1; 		
		}
		if (a == m) {
			break; 
		} 
	}
	//loop blueberries function (sec)
	var b = 0; 
	for (var y = 340; y <= 440; y += 50) {
		for (var x = 17; x < width; x += 35) {
			if (b < s) {
				blueberries(x, y);
			}
			else {
				break;
			}
			b += 1; 
		}
		if (b == s) {
			break;
		}
	}

}

//oranges represent the number of hours 
function orange(x, y) {
	//orange base 
	noStroke(); 
	fill(255, 165, 0); 
	ellipse(x, y, 50, 50);
	//orange leaf 
	noStroke(); 
	fill(0, 100, 0); 
	arc(x, y - 25, 50, 5, 270, 45, OPEN);
	//orange stem 
	stroke(101, 67, 33); 
	strokeWeight(5); 
	line(x, y - 25, x - 5, y - 35); 
}

//apples represent the number of minutes 
function apple(x, y) {
	//apple base 
	noStroke(); 
	fill(200, 0, 0);
	ellipse(x, y, 20, 20); 
	//apple leaf 
	noStroke(); 
	fill(0, 100, 0);
	arc(x, y - 13, 25, 3, 270, 45, OPEN); 
	//apple stem 
	stroke(101, 67, 33); 
	strokeWeight(2); 
	line(x, y - 10, x - 5, y - 15); 
}

//blueberries represent the number of seconds 
function blueberries(x, y) {
	//blueberry base 
	noStroke();  
	fill(0, 0, 103);	
	ellipse(x, y, 20, 20); 
	//highlight
	fill(255); 
	ellipse(x + 3, y - 3, 5, 5); 
	//leaves 
	noStroke(); 
	fill(0, 100, 0); 
	ellipse(x + 5, y - 10, 10, 5); 
	ellipse(x - 5, y - 10, 10, 5); 
}


	


	


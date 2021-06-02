function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	frameRate(20);
}

function draw() {
	if (mouseIsPressed) {
		fill(int(random(256)), int(random(256)), int(random(256)));
		let x = [10, 20, 30, 40, 50];
		ellipse(mouseX, mouseY, random(x));
	}

	if (keyIsPressed) {
		background(int(random(256)), int(random(256)), int(random(256)));
	}

}

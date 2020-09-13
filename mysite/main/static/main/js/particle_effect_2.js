
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// captures window resize event
window.addEventListener('resize', 
	function(event) {
		canvas.width = window.width;
		canvas.height = window.height;
	}
);

// particle that trails a droplet
class Trailet {

	constructor() {
		// trailet kinetics
		this.x = 0; // float-range(0, 1)
		this.y = 0; // float-range(0, 1)
		this.frames = 0; // num frames between creation and completion
		this.pComplete = 0; // float-range(0, 1): 0 is initialed, 1 is complete
		this.frameCounter = 0;

		// trailet cosmetics
		this.color = "#DC3684";
		this.startSize = 10;
	}
	respawn(x, y, frames) {
		this.x = x; // float-range(0, 1)
		this.y = y; // float-range(0, 1)
		this.frames = frames;
		this.frameCounter = 0;
	}

	draw() {
		ctx.beginPath();
		ctx.arc(this.x * canvas.width, this.y * canvas.height, this.startSize * (1 - this.pComplete), 0, Math.PI * 2, false);
		ctx.fillStyle = this.color;
		ctx.fill();
	}

	update() {
		// trailets don't move once created, they only change in appearance
		this.pComplete = this.frameCounter / this.frames;
		if (this.pComplete >= 1) {
			// complete
			this.size = 0;
			this.x = 0;
			this.y = 0;
		} else {
			this.frameCounter++;
		}

		this.draw();
	}
}

// particle that moves towards pond and influences it upon impact
class Droplet {

	constructor(x, y) {
		// droplet kinetics
		this.x = x; // float-range(0, 1)
		this.y = y; // float-range(0, 1)
		this.vx = 0;
		this.vy = 3;

		// droplet cosmetics
		this.color = "#DC3684";
		this.size = 10;

		// trail variables (position is a function of droplet variables)
		this.trailets = [];
		this.trailetCount = 8;
		this.trailetFrames = 80; // num frames for trail to disappear
		this.frequency = Math.floor(this.trailetFrames / this.trailetCount); // frequency of trailet creation: in num frames
		this.spawnCounter = Math.floor(Math.random() * this.frequency); // spawn clock
		this.spawnIndex = 0; // next trailet in this.trailets to be respawned: by index

		// create array of trailets
		for (let i = 0; i < this.trailetCount; i++) {
			this.trailets.push(new Trailet());
		}
	}

	respawn(x, y) {
		this.x = x; // float-range(0, 1)
		this.y = y; // float-range(0, 1)
	}

	draw() {
		ctx.beginPath();
		ctx.arc(this.x*canvas.width, this.y*canvas.height, this.size, 0, Math.PI * 2, false);
		ctx.fillStyle = this.color;
		ctx.fill();
	}

	update() {
		// spawn a trailet every this.frequency frames
		if (this.spawnCounter % this.frequency == 0) {
			// grab next trailet and respawn it
			this.trailets[this.spawnIndex].respawn(this.x, this.y, this.trailetFrames);

			// iterate spawnIndex and rotate back to 0 if end of array is hit
			this.spawnIndex++;
			if (this.spawnIndex >= this.trailets.length) {
				this.spawnIndex = 0;
			}

		}
		this.spawnCounter++;

		// draw trail first so droplet is always on top
		for (let i = 0; i < this.trailets.length; i++) {
			this.trailets[i].update();
		}

		// droplet position update
		this.x += this.vx / canvas.width;
		this.y += this.vy / canvas.height;

		this.draw();
	}
}
/*
// particle that makes up the pond
class Pondlet {
	// initializes/resets values relating to the canvas size
	updateCanvas() {
		//position is a percentage of width and height. the pixel values are calculated with canvas width/height
	}

	constructor() {

	}

	draw() {

	}

	update() {

	}
}*/


//initialize list of droplets and its variable characteristics
let droplets = [];
let dropletFrequency = 100;
let dropletCount = 1//Math.floor(canvas.height / dropletFrequency);
/*if (dropletCount < 5) {
	dropletCount = 5;
}*/

function init() {
	for (let i = 0; i < dropletCount; i++) {
		droplets.push(new Droplet((Math.floor(Math.random() * (canvas.width + 1))/canvas.width), 0));
	}
}

// animates objects
function animate() {
	requestAnimationFrame(animate);
	ctx.clearRect(0, 0, innerWidth, innerHeight);

	for (let i = 0; i < droplets.length; i++) {
		droplets[i].update();
	}
}

init();
animate();

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//color = "#DC3684"

class Particle {
	constructor(x, y, color, size, medium) {
		this.directionX = 0;
		this.directionY = 5;
		this.medium = medium; // bool, if part of medium : medium == true
		this.x = x;
		this.y = y;
		this.color = color;
		this.size = size;
	}
	//method to draw individual particle
	draw() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
		ctx.fillStyle = this.color;
		ctx.fill();
	}
	//update particle position, color, etc.
	update() {
		if (this.medium == false) {
			this.x += this.directionX;
			this.y += this.directionY;
		}

		this.draw();
	}
}

class Medium {
	constructor() {
		this.segmentCount = 40;
		this.color = "#cccccc";
		this.y = canvas.height * 3/4;
		this.particlesArray = [];
		this.particleRadius = 5;

		//create the medium segments (made of particles)
		for (let i = 0; i < this.segmentCount; i++) {
			let totalParticleWidth = this.particleRadius * 2 * this.segmentCount;
			// if more particle than space across canvas.width
			let ratio;
			if (totalParticleWidth < (canvas.width - totalParticleWidth)) {
				ratio = totalParticleWidth / (canvas.width - totalParticleWidth);
			} else {
				ratio = (canvas.width - totalParticleWidth) / totalParticleWidth;
			}
			let spacing = canvas.width * ratio / (this.segmentCount + 1);
			console.log(this.segmentCount);
			let width = canvas.width - spacing;
			let x = width / this.segmentCount * i + this.particleRadius + spacing;
			this.particlesArray.push(new Particle(x, this.y, this.color, this.particleRadius, true));
		}
	}

	update() {
		for (let i = 0; i < this.particlesArray.length; i++) {
			this.particlesArray[i].update();
		}
	}
}

let medium = new Medium();

// init particles that drop
let particlesArray = [];
particlesArray.push(new Particle(canvas.width / 2, 0, "#DC3684", 10, false));

// animation loop
function animate() {
	requestAnimationFrame(animate);
	ctx.clearRect(0, 0, innerWidth, innerHeight);

	medium.update();
	for (let i = 0; i < particlesArray.length; i++) {
		particlesArray[i].update();
	}
}

animate();
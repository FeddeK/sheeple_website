const canvas = document.querySelector("canvas");
var text = document.getElementById("txt")
const ctx = canvas.getContext("2d");
const zoom = 2;

ctx.canvas.width  = (window.innerWidth / zoom);
ctx.canvas.height = (window.innerHeight / zoom);
ctx.rect(0, 0, canvas.width, canvas.height);

// //Set up bg with one image
// ctx.fillStyle = bg;
// ctx.fillRect(0, 0, canvas.width, canvas.height);

//Set up bg repeating
const bg = new Image();
bg.src = ('pic/grass1.png');

//Load Sheeple!
const sheeple = new Image();
sheeple.src = ('pic/sheeple1.png');

bg.onload = () => {
    // ctx.drawImage(bg,0,0);
    var pat = ctx.createPattern(bg, "repeat");
    ctx.fillStyle = pat;
    ctx.fill();
    typeWriter();
}

class Sprite {
    constructor({ position, image }) {
        this.position = position;
        this.image = image;
    }

    draw() {
        ctx.drawImage(this.image, this.position.x, this.position.y );
    }
}

const sheeplez = new Sprite({
    position: {
        x : parseInt(ctx.canvas.width/2) - 16,
        y : parseInt(ctx.canvas.height/2) -16
    }, 
    image: sheeple
})

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    },
    any: {
        pressed: false
    }
}

function animate() {
    window.requestAnimationFrame(animate);
    sheeplez.draw()
    if (keys.w.pressed){
        sheeplez.position.y = sheeplez.position.y - 3;
        text.innerHTML = ""
    }
    if (keys.s.pressed){
        sheeplez.position.y = sheeplez.position.y + 3;
        text.innerHTML = ""
    }
    if (keys.a.pressed){
        sheeplez.position.x = sheeplez.position.x - 3;
        text.innerHTML = ""
    }
    if (keys.d.pressed){
        sheeplez.position.x = sheeplez.position.x + 3;
        text.innerHTML = ""
    }

}

animate();

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = true;
            keys.any.pressed = true;
            break
        case 'a':
            keys.a.pressed = true;
            keys.any.pressed = true;
            break
        case 's':
            keys.s.pressed = true;
            keys.any.pressed = true;
            break
        case 'd':
            keys.d.pressed = true;
            keys.any.pressed = true;
            break
    }
}
)

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = false;
            keys.any.pressed = false;
            break
        case 'a':
            keys.a.pressed = false;
            keys.any.pressed = false;
            break
        case 's':
            keys.s.pressed = false;
            keys.any.pressed = false;
            break
        case 'd':
            keys.d.pressed = false;
            keys.any.pressed = false;
            break
    }
}
)

var i = 0;
var txt = 'Press a,w,s,d to walk.';
var speed = 100;
text.style.left = "600px";

function typeWriter() {
    if (i < txt.length) {
        text.innerHTML += txt.charAt(i);
        if (keys.any.pressed) {
            return;
        }
        i++;
        setTimeout(typeWriter, speed);
    }
}
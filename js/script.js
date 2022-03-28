const canvas = document.querySelector("canvas");
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
    }
}

function animate() {
    window.requestAnimationFrame(animate);
    sheeplez.draw()
    console.log("animate")
    if (keys.w.pressed){
        sheeplez.position.y = sheeplez.position.y - 3;
    }
    if (keys.s.pressed){
        sheeplez.position.y = sheeplez.position.y + 3;
    }
    if (keys.a.pressed){
        sheeplez.position.x = sheeplez.position.x - 3;
    }
    if (keys.d.pressed){
        sheeplez.position.x = sheeplez.position.x + 3;
    }

}

animate();

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = true;
            break
        case 'a':
            keys.a.pressed = true;
            break
        case 's':
            keys.s.pressed = true;
            break
        case 'd':
            keys.d.pressed = true;
            break
    }
}
)

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = false;
            break
        case 'a':
            keys.a.pressed = false;
            break
        case 's':
            keys.s.pressed = false;
            break
        case 'd':
            keys.d.pressed = false;
            break
    }
}
)
import { get } from "./variables";
import { random } from "./utils";

const heroGreeting = document.querySelector("#hero-greeting");
const canvas = document.querySelector("#hero-canvas");
const ctx = canvas.getContext("2d");

const stars = [];

const greetings = ["hi", "hi there", "hey", "hey there", "hiya", "hello"];
const heroLinks = document.querySelectorAll("#hero > #links > a");

heroGreeting.innerText = `${greetings[Math.floor(random(0, greetings.length))]}`;

function initCanvas() {
    const dpr = window.devicePixelRatio || 1;
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function generateStars(amount, init) {
    for(let i = 0; i < amount; i++) {
        const x = init ? Math.floor(Math.random() * window.innerWidth) : 0;
        const y = Math.floor(Math.random() * window.innerHeight);
        const z = random(0.1, 1.5, 10);

        stars.push({
            x,
            y,
            z
        })
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = get("--text");

    for(let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.x += star.z;
        
        if(star.x > window.innerWidth) {
            stars.splice(i, 1);
            generateStars(1);
        }

        ctx.beginPath();

        if(star.z < 1) {
            ctx.globalAlpha = star.z;
            ctx.arc(star.x, star.y, 1, 0, Math.PI * 2);
        } else {
            ctx.globalAlpha = 1;
            ctx.arc(star.x, star.y, star.z, 0, Math.PI * 2);
        }

        ctx.fill();

    }

    requestAnimationFrame(draw);
}

initCanvas();

generateStars(window.innerWidth * 3, true);

draw();

window.addEventListener("resize", initCanvas);
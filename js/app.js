const targetDate = new Date("September 11, 2026 09:00:00").getTime();

setInterval(() => {

const now = new Date().getTime();

const distance = targetDate - now;

const days = Math.floor(distance/(1000*60*60*24));

const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

const seconds = Math.floor((distance%(1000*60))/1000);

document.getElementById("days").innerHTML=days;

document.getElementById("hours").innerHTML=hours;

document.getElementById("minutes").innerHTML=minutes;

document.getElementById("seconds").innerHTML=seconds;

},1000);
/* ===================================
   THEME
=================================== */

const themeBtn = document.getElementById("themeToggle");

themeBtn?.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

});
/* ===================================
   PROGRESS BAR
=================================== */

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const scroll = document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    progressBar.style.width = (scroll / height) * 100 + "%";

});
/* ===================================
   CURSOR GLOW
=================================== */

const cursor = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    if(cursor){

        cursor.style.left = e.clientX + "px";

        cursor.style.top = e.clientY + "px";

    }

});
/* ===================================
   SCROLL REVEAL
=================================== */

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();
/* ===================================
   COUNTER
=================================== */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = +counter.dataset.target;

    let count = 0;

    const speed = target / 120;

    function update() {

        count += speed;

        if (count < target) {

            counter.innerText = Math.floor(count);

            requestAnimationFrame(update);

        } else {

            counter.innerText = target;

        }

    }

    update();

});
/* ===================================
   CONFETTI
=================================== */

const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function launchConfetti(){

    const particles = [];

    for(let i=0;i<150;i++){

        particles.push({

            x:Math.random()*canvas.width,

            y:-20,

            size:4+Math.random()*6,

            speed:2+Math.random()*5,

            color:[
                "#00d9ff",
                "#7b2cff",
                "#00ff95",
                "#ffd700",
                "#ff4d6d"
            ][Math.floor(Math.random()*5)],

            angle:Math.random()*6

        });

    }

    let animation;

    function draw(){

        ctx.clearRect(0,0,canvas.width,canvas.height);

        particles.forEach(p=>{

            p.y+=p.speed;

            p.x+=Math.sin(p.angle);

            p.angle+=0.05;

            ctx.fillStyle=p.color;

            ctx.fillRect(p.x,p.y,p.size,p.size);

        });

        if(particles.some(p=>p.y<canvas.height+20)){

            animation=requestAnimationFrame(draw);

        }else{

            cancelAnimationFrame(animation);

            ctx.clearRect(0,0,canvas.width,canvas.height);

        }

    }

    draw();

}
/* ===================================
   LOADER
=================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .getElementById("loader")
            .classList
            .add("hide");

    }, 1500);

});
/* ===================================
   3D TILT EFFECT
=================================== */

document.querySelectorAll(".tilt-card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = (x / rect.width - 0.5) * 20;

        const rotateX = (0.5 - y / rect.height) * 20;

        card.style.transform =
        `perspective(900px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         scale(1.03)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "perspective(900px) rotateX(0) rotateY(0) scale(1)";

    });

});
function launchConfetti(){

    if(typeof confetti === "function"){

        confetti({

            particleCount:150,

            spread:100,

            origin:{ y:0.6 }

        });

    }

}

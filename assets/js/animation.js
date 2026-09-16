const canvas = document.getElementById("animationCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const icons = [];
const iconImg = new Image();
iconImg.src = "assets/img/hutte.png"; // ton image

let mouse = { x: null, y: null };

canvas.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

iconImg.onload = () => {
    for (let i = 0; i < 35; i++) {   // ← PLUS DE HUTTES
        icons.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 50 + 30,
            dx: (Math.random() - 0.5) * 0.3,
            dy: (Math.random() - 0.5) * 0.3,
            opacity: Math.random() * 0.4 + 0.4
        });
    }
    animate();
};

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    icons.forEach(icon => {
        const dist = Math.hypot(mouse.x - icon.x, mouse.y - icon.y);
        if (dist < 150) {
            icon.dx += (Math.random() - 0.5) * 0.4;
            icon.dy += (Math.random() - 0.5) * 0.4;
        }

        ctx.globalAlpha = icon.opacity;
        ctx.drawImage(iconImg, icon.x, icon.y, icon.size, icon.size);

        icon.x += icon.dx;
        icon.y += icon.dy;

        if (icon.x < 0 || icon.x > canvas.width) icon.dx *= -1;
        if (icon.y < 0 || icon.y > canvas.height) icon.dy *= -1;
    });

    requestAnimationFrame(animate);
}

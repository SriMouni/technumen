const nav = document.querySelector("[data-nav]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const header = document.querySelector("[data-header]");
const serviceRow = document.querySelector("[data-service-row]");
const canvas = document.querySelector("#system-canvas");
const ctx = canvas?.getContext("2d");

function syncHeaderState() {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

syncHeaderState();
window.addEventListener("scroll", syncHeaderState, { passive: true });

menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

nav.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

document.querySelectorAll("[data-scroll-services]").forEach((button) => {
  button.addEventListener("click", () => {
    serviceRow.scrollBy({ left: Number(button.dataset.scrollServices) * 380, behavior: "smooth" });
  });
});

if (canvas && ctx) {
  const particles = Array.from({ length: 170 }, (_, index) => ({
    angle: (index / 170) * Math.PI * 2,
    lane: index % 3,
    speed: 0.002 + (index % 3) * 0.00045,
    pulse: Math.random() * Math.PI * 2
  }));

  function drawSystem(time = 0) {
    const size = canvas.width;
    const center = size / 2;
    ctx.clearRect(0, 0, size, size);

    for (let i = 0; i < 5; i += 1) {
      ctx.strokeStyle = `rgba(190, 255, 229, ${0.07 - i * 0.008})`;
      ctx.beginPath();
      ctx.arc(center, center, 132 + i * 42, 0, Math.PI * 2);
      ctx.stroke();
    }

    particles.forEach((particle, index) => {
      const a = particle.angle + time * particle.speed;
      const radius = 108 + particle.lane * 18 + Math.sin(a * 5 + particle.pulse) * 11;
      const squash = 0.62 + particle.lane * 0.06;
      const x = center + Math.cos(a) * radius;
      const y = center + Math.sin(a) * radius * squash + Math.sin(a + particle.lane) * 18;
      const depth = (Math.sin(a) + 1) / 2;
      const hue = index % 4 === 0 ? "188, 255, 165" : "40, 234, 243";
      ctx.fillStyle = `rgba(${hue}, ${0.34 + depth * 0.5})`;
      ctx.beginPath();
      ctx.arc(x, y, 3.8 + depth * 2.5, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(center, center, 82, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
    requestAnimationFrame(drawSystem);
  }

  requestAnimationFrame(drawSystem);
}

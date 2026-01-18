const container = document.querySelector(".snowflakes");
const heartImg =
  "https://i.pinimg.com/originals/96/c7/8b/96c78bc8ab873498b763798793d64f62.png";

const MAX_HEARTS = 50;   // 🔒 limit (adjust if needed)
const SPAWN_RATE = 350; // ms between hearts

function addHeart() {
  // limit hearts
  if (container.children.length >= MAX_HEARTS) return;

  const heart = document.createElement("div");
  heart.className = "snowflake";

  const img = document.createElement("img");
  img.src = heartImg;
  img.style.width = Math.random() * 15 + 15 + "px";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 5 + 6 + "s";

  heart.appendChild(img);
  container.appendChild(heart);

  // remove after falling
  setTimeout(() => {
    heart.remove();
  }, 12000);
}

// spawn safely ❤️
setInterval(addHeart, SPAWN_RATE);

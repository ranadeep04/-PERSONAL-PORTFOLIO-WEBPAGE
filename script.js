const typewriterText = ["Web Development", "UI/UX Design", "Frontend Projects"];
let i = 0, j = 0, current = "", isDeleting = false;
const speed = 100;

function type() {
  const element = document.getElementById("typewriter");
  if (!element) return;

  current = typewriterText[i];
  if (isDeleting) {
    element.textContent = current.substring(0, j--);
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % typewriterText.length;
    }
  } else {
    element.textContent = current.substring(0, j++);
    if (j > current.length) {
      isDeleting = true;
    }
  }
  setTimeout(type, speed);
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});

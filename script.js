// 4. Project image glow on hover via JS
document.querySelectorAll(".project-item img").forEach(img => {
  img.addEventListener("mouseenter", () => {
    img.style.boxShadow = "0 0 15px rgba(137, 209, 238, 0.8)";
  });
  img.addEventListener("mouseleave", () => {
    img.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
  });
});
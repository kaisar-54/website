document.querySelectorAll(".project-item img").forEach(img => {
  img.addEventListener("mouseenter", () => {
    img.style.boxShadow = "0 0 15px rgba(0, 178, 248, 0.8)";
  });
  img.addEventListener("mouseleave", () => {
    img.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  });
});


// Simple welcome message
console.log("Welcome to Panniyoor Sree Varahamoorthy Temple Website");
// Smooth scroll (future ready)
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
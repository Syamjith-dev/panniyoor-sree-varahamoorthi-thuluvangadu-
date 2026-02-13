console.log("Welcome to Panniyoor Sree Varahamoorthy Temple Website");

let currentLang = "ml";
const toggleBtn = document.getElementById("langToggle");

toggleBtn.addEventListener("click", () => {
    document.querySelectorAll("[data-ml]").forEach(el => {
        el.innerHTML =
            currentLang === "ml"
                ? el.getAttribute("data-en")
                : el.getAttribute("data-ml");
    });

    toggleBtn.textContent = currentLang === "ml" ? "ML" : "EN";
    currentLang = currentLang === "ml" ? "en" : "ml";
});

/* Smooth scroll */
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document
            .querySelector(link.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});
// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Close the mobile menu after tapping a link
const menu = document.getElementById("mainNav");
document.querySelectorAll("#mainNav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    if (menu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});

// Highlight the nav link of the section currently in view
const links = document.querySelectorAll("#mainNav .nav-link");
const sections = [...links].map((l) => document.querySelector(l.getAttribute("href")));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((l) =>
          l.classList.toggle("active", l.getAttribute("href") === "#" + entry.target.id)
        );
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((s) => s && observer.observe(s));
const navItems = [
  ["Home","index.html"],
  ["Products","products.html"],
  ["Solutions","solutions.html"],
  ["About","about.html"],
  ["Contact","contact.html"]
];

function currentPage() {
  const file = location.pathname.split("/").pop() || "index.html";
  return file === "" ? "index.html" : file;
}

document.getElementById("site-header").innerHTML = `
<header class="site-header" id="site-header-inner">
  <div class="nav-wrap">
    <a class="logo" href="index.html" aria-label="aanaanaa home">aanaanaa</a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav">
      <span></span><span></span>
    </button>
    <nav class="desktop-nav" aria-label="Primary navigation">
      ${navItems.map(([label,href]) => `<a href="${href}" class="${currentPage()===href ? "active" : ""}">${label}</a>`).join("")}
    </nav>
    <a class="nav-cta" href="products.html">Explore Products <span>↗</span></a>
  </div>
  <div class="mobile-nav" id="mobile-nav">
    ${navItems.map(([label,href]) => `<a href="${href}" class="${currentPage()===href ? "active" : ""}">${label}</a>`).join("")}
    <a class="mobile-cta" href="products.html">Explore Products <span>↗</span></a>
  </div>
</header>`;

document.getElementById("site-footer").innerHTML = `
<footer class="site-footer">
  <div class="container footer-top">
    <div><a class="logo footer-logo" href="index.html">aanaanaa</a><p>Technology Infrastructure for the AI Era</p></div>
    <div class="footer-links">
      ${navItems.map(([label,href]) => `<a href="${href}">${label}</a>`).join("")}
    </div>
  </div>
  <div class="container footer-bottom"><span>© 2026 aanaanaa. All rights reserved.</span><span>U.S.-based technology e-commerce</span></div>
</footer>`;

const header = document.getElementById("site-header-inner");
const toggle = document.querySelector(".menu-toggle");
const mobileNav = document.getElementById("mobile-nav");

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 12);
}
window.addEventListener("scroll", updateHeader, {passive:true});
updateHeader();

toggle?.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!open));
  mobileNav.classList.toggle("open", !open);
});
mobileNav?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  toggle.setAttribute("aria-expanded", "false");
  mobileNav.classList.remove("open");
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold:0.08});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    const fields = [...form.querySelectorAll("input, textarea")];
    let valid = true;
    fields.forEach(field => {
      const wrapper = field.closest("label");
      const bad = field.required && !field.value.trim() || field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
      wrapper?.classList.toggle("invalid", bad);
      if (bad) valid = false;
    });
    const status = form.querySelector(".form-status");
    if (!valid) {
      status.textContent = "Please check the highlighted fields.";
      status.className = "form-status error";
      return;
    }
    status.textContent = "Thanks — your message is ready to be received. The inquiry form is currently in preview mode and does not transmit data yet.";
    status.className = "form-status success";
    form.reset();
  });
  form.querySelectorAll("input, textarea").forEach(field => field.addEventListener("input", () => field.closest("label")?.classList.remove("invalid")));
}

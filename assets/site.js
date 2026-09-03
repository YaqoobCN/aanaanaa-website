const navItems = [
  ["Home", "index.html"],
  ["Products", "products.html"],
  ["Solutions", "solutions.html"],
  ["About", "about.html"],
  ["Contact", "contact.html"]
];

document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname.split("/").pop() || "index.html";
  const active = path === "" ? "index.html" : path;

  const header = document.getElementById("site-header");
  if (header) {
    header.innerHTML = `
      <header class="site-header">
        <div class="container nav-wrap">
          <a class="logo" href="index.html" aria-label="aanaanaa home">aanaanaa<span>.</span></a>
          <button class="menu-toggle" aria-label="Open navigation" aria-expanded="false"><span></span><span></span></button>
          <nav class="nav">
            ${navItems.map(([name, href]) => `<a class="${active === href ? "active" : ""}" href="${href}">${name}</a>`).join("")}
          </nav>
          <a class="nav-cta" href="products.html">Explore Products <span>↗</span></a>
        </div>
      </header>`;
    const toggle = header.querySelector(".menu-toggle");
    toggle.addEventListener("click", () => {
      const open = header.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML = `
      <footer class="site-footer">
        <div class="container footer-top">
          <div><a class="logo logo-light" href="index.html">aanaanaa<span>.</span></a><p>Technology Infrastructure<br>for the AI Era.</p></div>
          <div class="footer-links">
            <div><small>EXPLORE</small>${navItems.map(([name, href]) => `<a href="${href}">${name}</a>`).join("")}</div>
            <div><small>FOCUS</small><a href="products.html#ai-computing">AI Computing</a><a href="products.html#data-storage">Data Storage</a><a href="products.html#energy">Energy Technology</a></div>
          </div>
        </div>
        <div class="container footer-bottom"><span>© 2026 aanaanaa. All rights reserved.</span><span>Technology Infrastructure for the AI Era</span></div>
      </footer>`;
  }

  document.querySelectorAll(".reveal").forEach(el => {
    requestAnimationFrame(() => el.classList.add("visible"));
  });

  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      let valid = true;
      form.querySelectorAll("[required]").forEach(input => {
        const ok = input.type === "email" ? /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(input.value.trim()) : input.value.trim().length > 0;
        input.classList.toggle("invalid", !ok);
        if (!ok) valid = false;
      });
      const status = form.querySelector(".form-status");
      if (!valid) {
        status.textContent = "Please check the required fields.";
        status.className = "form-status error";
        return;
      }
      status.textContent = "Thank you. Your message has been prepared successfully. The form is currently front-end only and does not transmit data until a backend is connected.";
      status.className = "form-status success";
      form.reset();
    });
  }
});

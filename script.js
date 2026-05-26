document.addEventListener("DOMContentLoaded", () => {

  /* ===== SIGN IN BUTTON ACTION ===== */
  const signInBtn = document.querySelector("header .btn-secondary");
  signInBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("🔐 Sign In feature coming soon!\nStay tuned with Lunar Brew ☕");
  });


  /* ===== ORDER ONLINE BUTTON ACTION ===== */
  const orderBtn = document.querySelector("header .btn-primary");
  orderBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const productsSection = document.querySelector("#products");
    productsSection.scrollIntoView({ behavior: "smooth" });
  });


  /* ===== AUTO UPDATE FOOTER YEAR ===== */
  const yearSpan = document.getElementById("year");
  yearSpan.textContent = new Date().getFullYear();


  /* ===== ACTIVE NAV LINK ON SCROLL (OPTIONAL) ===== */
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

});

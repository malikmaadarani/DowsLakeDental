/* Dow's Lake Dental — main.js
   Mobile menu · scroll reveal · booking/contact form · footer year */
(function () {
  "use strict";

  /* Mobile navigation ---------------------------------------------------- */
  var menuBtn = document.querySelector(".menu-btn");
  var navLinks = document.querySelector(".nav-links");
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
      var open = navLinks.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      menuBtn.querySelector(".label").textContent = open ? "Close" : "Menu";
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && navLinks.classList.contains("open")) {
        navLinks.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.querySelector(".label").textContent = "Menu";
        menuBtn.focus();
      }
    });
  }

  /* Scroll reveal (respects reduced motion via CSS) ---------------------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* Booking / contact form ---------------------------------------------- */
  // Client-side validation only. To connect a real backend, set the form's
  // `action` (Netlify Forms, Formspree, or your own endpoint) and remove the
  // demo block marked below so the browser submits normally.
  var form = document.getElementById("booking-form");
  if (form) {
    var success = document.getElementById("form-success");

    function mark(field, bad) {
      var wrap = field.closest(".field");
      field.setAttribute("aria-invalid", bad ? "true" : "false");
      if (wrap) wrap.classList.toggle("invalid", bad);
    }

    function validate() {
      var ok = true, first = null;
      var name = form.elements.name, email = form.elements.email, phone = form.elements.phone;
      var nameBad = !name.value.trim();
      var emailBad = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
      var phoneBad = phone.value.replace(/\D/g, "").length < 10;
      mark(name, nameBad); mark(email, emailBad); mark(phone, phoneBad);
      [[name, nameBad], [email, emailBad], [phone, phoneBad]].forEach(function (pair) {
        if (pair[1]) { ok = false; first = first || pair[0]; }
      });
      if (first) first.focus();
      return ok;
    }

    Array.prototype.forEach.call(form.querySelectorAll("input, textarea"), function (el) {
      el.addEventListener("input", function () { mark(el, false); });
    });

    form.addEventListener("submit", function (e) {
      if (!validate()) { e.preventDefault(); return; }

      /* --- DEMO MODE: remove this block once the form has a real action --- */
      e.preventDefault();
      form.hidden = true;
      if (success) {
        success.style.display = "block";
        success.setAttribute("tabindex", "-1");
        success.focus();
      }
      /* --- end demo block --- */
    });
  }

  /* Footer year ----------------------------------------------------------- */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();

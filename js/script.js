document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".site-header");
  var menuToggle = document.getElementById("menu-toggle");
  var mainNav = document.getElementById("main-nav");
  var navLinks = Array.prototype.slice.call(mainNav.querySelectorAll(".nav-btn"));

  /* ---------- Mobile menu toggle ---------- */
  function closeMenu() {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
  }

  function openMenu() {
    mainNav.classList.add("open");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Cerrar menú");
  }

  menuToggle.addEventListener("click", function () {
    var isOpen = mainNav.classList.contains("open");
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  /* Close the mobile menu after choosing a section */
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      closeMenu();
    });
  });

  /* Close mobile menu if the viewport is resized back to desktop */
  window.addEventListener("resize", function () {
    if (window.innerWidth > 720) {
      closeMenu();
    }
  });

  /* ---------- Smooth scroll with sticky-header offset ---------- */
  var allAnchorLinks = document.querySelectorAll('a[href^="#"]');
  allAnchorLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      var targetId = link.getAttribute("href");
      if (targetId.length < 2) return;
      var target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      var headerHeight = header.offsetHeight;
      var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });

      history.pushState(null, "", targetId);
    });
  });

  /* ---------- Active nav state on scroll ---------- */
  var sections = navLinks
    .map(function (link) {
      var id = link.getAttribute("href");
      return document.querySelector(id);
    })
    .filter(Boolean);

  function updateActiveLink() {
    var scrollPos = window.pageYOffset + header.offsetHeight + 40;
    var current = sections[0];

    sections.forEach(function (section) {
      if (section.offsetTop <= scrollPos) {
        current = section;
      }
    });

    /* Near the bottom of the page, always highlight the last nav section
       (e.g. "Contacto"), even if its offsetTop can't be scrolled flush
       under the header because it's the final block on the page. */
    var atBottom = window.pageYOffset + window.innerHeight >= document.documentElement.scrollHeight - 2;
    if (atBottom) {
      current = sections[sections.length - 1];
    }

    navLinks.forEach(function (link) {
      var isActive = link.getAttribute("href") === "#" + current.id;
      link.classList.toggle("active", isActive);
    });
  }

  window.addEventListener("scroll", updateActiveLink, { passive: true });
  updateActiveLink();
});

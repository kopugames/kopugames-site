// Theme toggle (remembers the visitor's choice) and the header border on scroll.
(function () {
  var root = document.documentElement;
  var KEY = "kopu-theme";

  function systemDark() { return window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches; }
  function current() { return root.getAttribute("data-theme") || (systemDark() ? "dark" : "light"); }

  var btn = document.querySelector(".theme-btn");
  if (btn) {
    btn.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
      btn.setAttribute("aria-label", next === "dark" ? "Switch to light theme" : "Switch to dark theme");
    });
    btn.setAttribute("aria-label", current() === "dark" ? "Switch to light theme" : "Switch to dark theme");
  }

  var head = document.querySelector(".site-head");
  if (head) {
    var onScroll = function () { head.classList.toggle("scrolled", window.scrollY > 8); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
})();

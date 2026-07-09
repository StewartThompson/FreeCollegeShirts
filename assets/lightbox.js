(function () {
  var box = document.getElementById("lightbox");
  if (!box) return;
  var img = box.querySelector("img");
  var closeBtn = box.querySelector("button");

  function open(src, alt) {
    img.src = src;
    img.alt = alt || "";
    box.classList.add("open");
    box.setAttribute("aria-hidden", "false");
    closeBtn.focus();
    document.body.style.overflow = "hidden";
  }

  function close() {
    box.classList.remove("open");
    box.setAttribute("aria-hidden", "true");
    img.src = "";
    document.body.style.overflow = "";
  }

  document.addEventListener("click", function (e) {
    var btn = e.target.closest("button[data-full]");
    if (!btn) return;
    open(btn.getAttribute("data-full"), btn.querySelector("img").alt);
  });

  closeBtn.addEventListener("click", close);
  box.addEventListener("click", function (e) {
    if (e.target === box) close();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && box.classList.contains("open")) close();
  });
})();

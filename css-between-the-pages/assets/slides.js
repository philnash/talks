document.addEventListener("DOMContentLoaded", function () {
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");

  const nextSlide = () => next.click();
  const prevSlide = () => prev.click();

  window.addEventListener("keyup", function (e) {
    const key = e.key.toLowerCase();
    ["arrowright", "d", " "].includes(key) && nextSlide();
    ["arrowleft", "a"].includes(key) && prevSlide();
  });
});

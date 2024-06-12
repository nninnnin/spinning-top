function canvasScroll(canvas) {
  let startPos = null;
  let scrollAmount = 0;

  const container = document.querySelector(".container");

  canvas.addEventListener("touchstart", (e) => {
    startPos = e.touches[0].clientY;
  });

  canvas.addEventListener("touchmove", (e) => {
    scrollAmount = startPos - e.touches[0].clientY;

    window.requestAnimationFrame(() => {
      container.scrollBy(0, scrollAmount);
    });

    startPos = e.touches[0].clientY;
  });

  canvas.addEventListener("touchend", (e) => {
    startPos = null;
    scrollAmount = 0;
  });
}

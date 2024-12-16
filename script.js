window.addEventListener("DOMContentLoaded", function () {
  const mobileMenuToggle = this.document.querySelector(".mobile-menu");
  const mobileNav = this.document.querySelector(".mobile--nav");
  const backProjectBtn = this.document.getElementById("back-project-btn");
  const mql = this.window.matchMedia("(min-width: 768px)");
  const modalDialog = this.document.getElementById("modal-dialog");
  const closeModalBtn = this.document.getElementById("close-modal-btn");
  let isOpened = false;
  mobileMenuToggle.addEventListener("click", () => {
    if (!isOpened) {
      mobileNav.setAttribute("open", "true");
    } else {
      mobileNav.removeAttribute("open");
    }
    isOpened = !isOpened;
  });

  mql.addEventListener("change", function (e) {
    if (e.matches) {
      mobileNav.removeAttribute("open");
      isOpened = false;
    }
  });

  backProjectBtn.addEventListener("click", function () {
    if (!modalDialog.open) {
      document.body.style.overflow = "clip";
      modalDialog.showModal();
    }
  });

  closeModalBtn.addEventListener("click", function () {
    modalDialog.close();
    document.body.style.overflow = "auto";
  });

  // backing animations
  const backing1 = this.document
    .querySelector(".backings:nth-child(1)")
    .querySelector("strong");
  const backing2 = this.document
    .querySelector(".backings:nth-child(2)")
    .querySelector("strong");
  const backing3 = this.document
    .querySelector(".backings:nth-child(3)")
    .querySelector("strong");

  animateCounter(backing1, 89914);
  animateCounter(backing2, 5007);
  animateCounter(backing3, 56, 50);
});

function animateCounter(el, target, speed = 200) {
  let count = 0;
  const increment = Math.trunc(target / speed);
  let interval = this.setInterval(function () {
    if (count < target + 1) {
      el.textContent = `$ ${count}`;
      count += increment;
    } else {
      const currentCount = parseInt(el.textContent.substring(2));
      target - currentCount;
      el.textContent = `$ ${currentCount + (target - currentCount)}`;
      clearInterval(interval);
    }
  }, 1);
}

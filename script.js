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
    openModal(modalDialog);
  });

  closeModalBtn.addEventListener("click", function () {
    modalDialog.close();
    document.body.style.overflow = "auto";
  });

  // backing animations
  const backing1 = this.document.querySelector(".backings:nth-child(1)").querySelector("strong");
  const backing2 = this.document.querySelector(".backings:nth-child(2)").querySelector("strong");
  const backing3 = this.document.querySelector(".backings:nth-child(3)").querySelector("strong");

  animateCounter(backing1, 89914);
  animateCounter(backing2, 5007);
  animateCounter(backing3, 56, 50);

  // Pledge selection
  Array.from(document.querySelectorAll(".btn--select-pledge"))?.forEach((btnSelectPledge) => {
    btnSelectPledge.addEventListener("click", (e) => {
      const pleadgeId = getComputedStyle(e.target).getPropertyValue("--feature-id");
      openModal(modalDialog, pleadgeId);
    });
  });
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

const openModal = function (dialog, selectedPledge) {
  if (!dialog) {
    throw new Error("dialog must not be null");
  }
  const selectedPleadge = document.getElementById(selectedPledge);
  const continueCtas = dialog.querySelectorAll(".thank-you-cta");
  continueCtas.forEach((cta) =>
    cta.addEventListener("click", () => {
      dialog.close();
      openThankYouModal(1000);
    })
  );
  dialog.addEventListener("close", () => {
    debugger;
    selectedPleadge.checked = false;
    continueCtas.forEach((cta) => setTimeout(() => cta.removeEventListener("click", openThankYouModal), 4000));
  });

  if (selectedPledge) {
    selectedPleadge.checked = true;
  }
  if (!dialog.open) {
    // disableVerticalScroll();
    dialog.showModal();
  }
};

const openThankYouModal = function (delay = 0) {
  const thankYouDialog = document.getElementById("thank-you");
  debugger;
  setTimeout(() => thankYouDialog.showModal(), delay);
  setTimeout(() => {
    thankYouDialog.close();
    enableVerticalScroll();
  }, 4000);
};

const disableVerticalScroll = function () {
  document.body.style.overflow = "hidden";
};
const enableVerticalScroll = function () {
  document.body.style.overflow = "initial";
};

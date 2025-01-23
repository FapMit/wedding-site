function pageAnimation() {
  document.addEventListener("DOMContentLoaded", () => {
    const headerLogo = document.querySelector(".header__logo.animated");
    setTimeout(() => {
      headerLogo.classList.remove("animated");
    }, 750);
  });
}

export default pageAnimation;

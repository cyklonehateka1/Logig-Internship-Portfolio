(() => {
  const mobileMenu = document.querySelector(".menu-container");
  const closeMobileMenu = document.querySelector("#close-mobile");
  const hamburgerMenu = document.querySelector("#hamburger-menu");

  const mobileMenuToggler = () => {
    mobileMenu.style.transform = "translateX(0)";
    console.log("hell");
    closeMobileMenu.addEventListener("click", () => {
      mobileMenu.style.transform = "translateX(100%)";
    });
  };

  hamburgerMenu.addEventListener("click", mobileMenuToggler);
})();

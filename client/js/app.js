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

  // Testimonials Slider
  const slide = document.getElementById("slide");
  const arrowUp = document.getElementById("arrowUp");
  const arrowDown = document.getElementById("arrowDown");
  const testimonial = document.querySelectorAll(".testimonial");

  let counter = 0;
  let size = testimonial[0].clientHeight + 2;
  const testimonialLength = testimonial.length - 1;

  const testimonialSlideDown = () => {
    if (counter < size * testimonialLength) {
      slide.style.top = `-${size + counter}px`;
      counter += size;
    }
  };

  console.log(counter);
  arrowDown.addEventListener("click", testimonialSlideDown);

  const testimonialSlideUp = () => {
    if (counter >= size) {
      slide.style.top = `-${counter - size}px`;
      counter -= size;
    }
  };

  arrowUp.addEventListener("click", testimonialSlideUp);
})();

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

  // Animation

  // Hero Section Animation
  const animationObserverFirst = new IntersectionObserver((entries) => {
    for (let i = 0; i < entries.length; i++) {
      let entry = entries[0];
      if (entry.isIntersecting) {
        document.querySelector("#hero-left").classList.add("fadein-left");
        document.querySelector("#hero-right").classList.add("fadein-right");
      }
    }
  });

  animationObserverFirst.observe(document.querySelector(".hero-section"));

  // About Section Animation
  const animationObserverSecond = new IntersectionObserver((entries) => {
    for (let i = 0; i < entries.length; i++) {
      let entry = entries[0];
      if (entry.isIntersecting) {
        document.querySelector(".about-left").classList.add("fadein-top");
        document.querySelector(".about-right").classList.add("fadein-bottom");
      }
    }
  });

  animationObserverSecond.observe(document.querySelector(".about-container"));

  // Skills and Testimonials Section Animation
  const animationObserverThird = new IntersectionObserver((entries) => {
    for (let i = 0; i < entries.length; i++) {
      let entry = entries[0];
      if (entry.isIntersecting) {
        document.querySelector("#skills").classList.add("fadein-top");
        document
          .querySelector(".test-skills-img")
          .classList.add("fadein-bottom");
        document.querySelector(".testimonials").classList.add("fadein-top");
      }
    }
  });

  animationObserverThird.observe(
    document.querySelector(".skills-test-container")
  );
})();

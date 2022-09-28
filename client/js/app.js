(() => {
  const mobileMenu = document.querySelector(".menu-container");
  const closeMobileMenu = document.querySelector("#close-mobile");
  const hamburgerMenu = document.querySelector("#hamburger-menu");

  const mobileMenuToggler = () => {
    mobileMenu.style.transform = "translateX(0)";
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
  const skillsAndTestimonyAnim = new IntersectionObserver((entries) => {
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

  skillsAndTestimonyAnim.observe(
    document.querySelector(".skills-test-container")
  );

  const galleryRowOneAnim = new IntersectionObserver((entries) => {
    for (let i = 0; i < entries.length; i++) {
      let entry = entries[0];
      if (entry.isIntersecting) {
        document.querySelector(".gallery-row-1").classList.add("fadein-left");
      }
    }
  });

  galleryRowOneAnim.observe(document.querySelector(".images-container"));

  const galleryRowTwoAnim = new IntersectionObserver((entries) => {
    for (let i = 0; i < entries.length; i++) {
      let entry = entries[0];
      if (entry.isIntersecting) {
        document.querySelector(".gallery-row-2").classList.add("fadein-right");
      }
    }
  });

  galleryRowTwoAnim.observe(document.querySelector(".gallery-row-2"));

  const galleryRowThreeAnim = new IntersectionObserver((entries) => {
    for (let i = 0; i < entries.length; i++) {
      let entry = entries[0];
      if (entry.isIntersecting) {
        document.querySelector(".gallery-row-3").classList.add("fadein-left");
      }
    }
  });

  galleryRowThreeAnim.observe(document.querySelector(".gallery-row-3"));

  // GALLERY IMMAGE VIEWER

  const imageModal = document.querySelector(".image-viewer-modal");

  const imageViewer = () => {
    const galleryImage = document.querySelectorAll(".gallery-image");
    let activeImage = document.querySelector("#active-img");
    // console.log(activeImage);

    const leftArrow = document.querySelector("#leftArrow");
    const rightArrow = document.querySelector("#rightArrow");

    const toggleActiveImage = (e) => {
      const imageSrc = e.srcElement.getAttribute("src");
      activeImage.src = imageSrc;
      imageModal.style.display = "flex";

      imageModal.addEventListener("click", (e) => {
        if (e.target.closest(".active-image-box")) return;
        imageModal.style.display = "none";
      });
    };

    const nextImage = (e) => {
      console.log(e);
    };

    for (let i = 0; i < galleryImage.length; i++) {
      const image = galleryImage[i];
      // console.log(image);

      image.addEventListener("click", toggleActiveImage);
      rightArrow.addEventListener("click", nextImage);
    }
  };

  imageViewer();

  // for (let i = 0; i < image.length; i++) {
  //   console.log
  // }
})();

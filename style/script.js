document.addEventListener("DOMContentLoaded", function () {
  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
      },
    },
  };

  const swipers = document.querySelectorAll(".mySwiper");
  swipers.forEach((swiperElement) => {
    new Swiper(swiperElement, {
      ...swiperOptions,
      navigation: {
        nextEl: swiperElement.querySelector(".swiper-button-next"),
        prevEl: swiperElement.querySelector(".swiper-button-prev"),
      },
      pagination: {
        el: swiperElement.querySelector(".swiper-pagination"),
        clickable: true,
      },
    });
  });
  const header = document.querySelector("header");
  let lastScrollTop = 0;
  let ticking = false;

  function updateHeader() {
    const scrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      header.classList.add("header-hidden");
    } else {
      header.classList.remove("header-hidden");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

    if (scrollTop <= 50) {
      header.classList.remove("header-hidden");
    }

    ticking = false;
  }

  window.addEventListener("scroll", function () {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  });

  const animateOnScroll = function () {
    const elements = document.querySelectorAll("section");

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight - 100) {
        element.classList.add("animate-fadeIn");
      }
    });
  };

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll();

  const mobileMenuButton = document.querySelector(".mobile-menu-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });
  }

  const newsletterForm = document.querySelector(".newsletter-form");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value.trim();

      if (email && isValidEmail(email)) {
        alert("با تشکر از عضویت شما در خبرنامه!");
        this.reset();
      } else {
        alert("لطفاً یک ایمیل معتبر وارد کنید.");
      }
    });
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const filmCards = document.querySelectorAll(".swiper-slide");

  filmCards.forEach((card) => {
    card.classList.add("film-card");
  });
});
// MEDIA QUERIES

function widthChangeCallback() {
  if(window.innerWidth > 900) {
    console.log("width > 900px");
    var swiper_service= new Swiper(".mySwiper-2", {
      grabCursor: true,
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
        clickable: true,
        hide: true,
      },
      scrollbar: {
          el: ".swiper-scrollbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
   } else {
    console.log("width < 900px");
    var swiper_service= new Swiper(".mySwiper-2", {
      grabCursor: true,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
        clickable: true,
        hide: true,
      },
      scrollbar: {
          el: ".swiper-scrollbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
   }
}

// SWIPER
//BANNER
var swiper_banner = new Swiper(".mySwiper-1", {
    // grabCursor: true,
    // loop: true,
    // slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// SERVICE
window.addEventListener('resize', widthChangeCallback);
widthChangeCallback();
  // PRODUCTS

  var swiper_product= new Swiper(".mySwiper-3", {
    // cssMode: true,
    // rewind: true,
    // freeMode: true,
    // effect: "coverflow",
    grabCursor: true,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    // coverflowEffect: {
        // rotate: 80,
        // stretch: 0,
        // depth: 100,
        // modifier: 1,
        // slideShadows: true,
    // },
    // pagination: {
    //   el: ".swiper-pagination",
    // //   dynamicBullets: true,
    //   type: "progressbar",
    //   clickable: true,
    //   hide: true,
    // },
    // scrollbar: {
    //     el: ".swiper-scrollbar",
    // },
    // mousewheel: true,
    // keyboard: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
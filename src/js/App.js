setTimeout(function () {
  //code goes here
  $("div.empty").on({
    mouseenter: function () {
      $("div.submenu").slideUp(300);
    },
  });
  $("li.slidedown").on({
    mouseenter: function () {
      $(this).find("div.submenu").slideDown(300);
    },
    mouseleave: function () {
      $(this).find("div.submenu").slideUp(300);
    },
  });
  
  // blur
  $("li.slidedown").on({
    mouseenter: function () {
      $("div.blur").removeClass("hidden");
      
    },
    mouseleave: function () {
      $("div.blur").addClass("hidden");
    },
  });
  // submenumd
  $("span.submenumd").on({
    click: function () {
      $("div.submenumd").fadeIn(500);
      
    },
    
  });
  document.querySelector("span.close").addEventListener("click", function(e){
    e.target.parentElement.classList.add("hidden")
    window.location.reload();
    

  })
  // slider
  $(function () {
    if ($(".gallery-wrapper").length) {
      var galleryThumbs = new Swiper(
        ".gallery-wrapper .content .gallery.thumb .swiper-container",
        {
          speed: 900,
          effect: "slide",
          spaceBetween: 12,
          grabCursor: false,
          simulateTouch: true,
          loop: false,
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
          navigation: {
            nextEl:
              ".gallery-wrapper .content .gallery.thumb .swiper-next-button",
            prevEl:
              ".gallery-wrapper .content .gallery.thumb .swiper-prev-button",
          },
          breakpoints: {
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            414: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 10,
            },
          },
          on: {
            init: function () {
              let containerThumbWidth = $(
                ".gallery-wrapper .content .gallery.thumb"
              ).outerWidth();

              let totalThumbWidth = 0;

              $(
                ".gallery.thumb .swiper-container .swiper-wrapper .swiper-slide"
              ).each(function () {
                let thumbWidth = $(this).outerWidth();
                totalThumbWidth += thumbWidth;
              });

              if (totalThumbWidth < containerThumbWidth) {
                $(
                  ".gallery.thumb .swiper-next-button, .gallery.thumb .swiper-prev-button"
                ).addClass("hide");
              } else {
                $(
                  ".gallery.thumb .swiper-next-button, .gallery.thumb .swiper-prev-button"
                ).removeClass("hide");
              }
            },
          },
        }
      );

      var galleryFull = new Swiper(
        ".gallery-wrapper .content .gallery.full .swiper-container",
        {
          speed: 900,
          effect: "slide",
          slidesPerView: 3,
          spaceBetween: 0,
          centeredSlides: true,
          autoplay: {
            delay: 7000,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          },
          keyboard: {
            enabled: true,
          },
          grabCursor: false,
          simulateTouch: false,
          loop: true,
          navigation: {
            nextEl:
              ".gallery-wrapper .content .gallery.full .swiper-next-button",
            prevEl:
              ".gallery-wrapper .content .gallery.full .swiper-prev-button",
          },
          thumbs: {
            swiper: galleryThumbs,
          },
          on: {
            slideChangeTransitionStart: function () {
              $(
                ".gallery-wrapper .content .gallery.full .swiper-slide .overlay"
              ).removeClass("show");
            },
            slideChangeTransitionEnd: function () {
              $(
                ".gallery-wrapper .content .gallery.full .swiper-slide-active .overlay"
              ).addClass("show");
            },
          },
        }
      );
    }
  });
  // accordion
  const accordionContent = document.querySelectorAll(".accordion-content");

  accordionContent.forEach((item, index) => {
    let header = item.querySelector("header");
    header.addEventListener("click", () => {
      item.classList.toggle("open");

      let description = item.querySelector(".description");
      if (item.classList.contains("open")) {
        description.style.height = `${description.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
        item.querySelector("i").classList.replace("fa-plus", "fa-minus");
      } else {
        description.style.height = "0px";
        item.querySelector("i").classList.replace("fa-minus", "fa-plus");
      }
      removeOpen(index); //calling the funtion and also passing the index number of the clicked header
    });
  });

  function removeOpen(index1) {
    accordionContent.forEach((item2, index2) => {
      if (index1 != index2) {
        item2.classList.remove("open");

        let des = item2.querySelector(".description");
        des.style.height = "0px";
        item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
      }
    });
  }

}, 1000);

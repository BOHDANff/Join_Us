var swiper = new Swiper(".mySwiper", {
        direction: "vertical",

        slidesPerView: 1,

        spaceBetween: 100,

        mousewheel: true,

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        keyboard: {
    		enabled: true,
    		onlyInViewport: true,
  		  },


});
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    // effect: "fade",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
  
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 5,
      },
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  });
  
  // scroll
  
  $(document).ready(function (){
  
  
    $(window).on('scroll', function(){
        if ($(window).scrollTop()) {
        $(".nav-bar").addClass('nav-scroll');
        }else{
        $(".nav-bar").removeClass('nav-scroll');
        }
    });
  
  });
  
  
  
  // window.addEventListener("scroll", function(){
  //   document.querySelector(".nav-bar").classList.toggle("nav-scroll")
  // });
  
  // navbar toggle
  
  var bg = document.querySelector(".backgrund")
//   var close = document.querySelector(".close")
  var links = document.querySelector(".main-li")
  
  bg.addEventListener("click", nav_toggle);
//   close.addEventListener("click", nav_toggle);
  links.addEventListener("click", nav_toggle);
  
  function nav_toggle() {
    document.querySelector(".nav-links").classList.toggle("active");
    document.querySelector(".backgrund").classList.toggle("active");
    document.querySelector(".nav-links-ul").classList.toggle("nav-act");
    document.querySelector(".toggle-btn").classList.toggle("bar-act")
    document.querySelector("body").classList.toggle("stop-scr")
  }
  
  var toggleBtn = document.querySelector(".toggle-btn")
  
  // *************************
  
  AOS.init({
    duration: 900,
    delay: 300,
  });
  
  // slide animation lading
  
  let slides = document.querySelectorAll(".slide");
  let index = 0;
  
  function next() {
    slides[index].classList.remove("act");
    index = (index + 1) % slides.length;
    slides[index].classList.add("act");
  }
  
  function prev() {
    slides[index].classList.remove("act");
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add("act");
  }
  setInterval(prev, 10000);
  
  // ******************
  
  window.addEventListener("load", () => {
    const loder = document.querySelector(".loader-div");
  
    loder.classList.add("loder-hide");
  
    loder.addEventListener("transitionend", () => {
      document.body.removeChild(loader-div)
    });
  });
  
   
  
  
  // google translat
  
  function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'en',
      autoDisplay: false,
      includedLanguages: 'en,fr,ar,ur'
    }, 'google_translate_element');
  }
  
  
  
  
  
  
  
  var open_btn=document.querySelector(".open-btn-1");
  
  open_btn.addEventListener("click", model_open);
  
  function model_open() {
    document.querySelector(".model-1").classList.add("model-active")
  }
  
  document.querySelector(".open-btn-2").addEventListener("click", model_open2);
  
  function model_open2() {
    document.querySelector(".model-2").classList.add("model-active")
  }
  
  
  
  
  
  
  
  
  document.querySelector(".bg-1").addEventListener("click", model_close);
  document.querySelector(".close-1").addEventListener("click", model_close);
  
  document.querySelector(".bg-2").addEventListener("click", model_close);
  document.querySelector(".close-2").addEventListener("click", model_close);
  
  document.querySelector(".bg-3").addEventListener("click", model_close);
  document.querySelector(".close-3").addEventListener("click", model_close);
  
  document.querySelector(".bg-4").addEventListener("click", model_close);
  document.querySelector(".close-4").addEventListener("click", model_close);
  
  function model_close() {
    document.querySelector(".model").classList.remove("model-active")
  }
  
  
  
  
  
  
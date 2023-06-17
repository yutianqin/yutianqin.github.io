
/** Preloader **/
const preloader = document.querySelector('#preloader');
if (preloader) {
  window.addEventListener('load', () => {
    preloader.remove();
  });
}

/*** Mobile nav toggle ***/
const mobileNavShow = document.querySelector('.mobile-nav-show');
const mobileNavHide = document.querySelector('.mobile-nav-hide');

document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
  el.addEventListener('click', function(event) {
    event.preventDefault();
    mobileNavToogle();
  })
});

function mobileNavToogle() {
  document.querySelector('body').classList.toggle('mobile-nav-active');
  mobileNavShow.classList.toggle('d-none');
  mobileNavHide.classList.toggle('d-none');
};

 /** Hide mobile nav on same-page/hash links */
 document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

/*** Scroll top button ***/
const scrollTop = document.querySelector('.scroll-top');
if (scrollTop) {
  const togglescrollTop = function() {
    window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
  }
  window.addEventListener('load', togglescrollTop);
  document.addEventListener('scroll', togglescrollTop);
  scrollTop.addEventListener('click', window.scrollTo({
    top: 0,
    behavior: 'smooth'
  }));
}

/*** Initialize Swiper ***/
window.onload = function(){
    const swiper = new Swiper('.slides-3', {
        speed: 600,
        loop: true,
        autoplay: {
        delay: 5000,
        disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
        },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 40
        },

        1200: {
            slidesPerView: 3,
        }
        }
    });
       /* Gallery slider */
        new Swiper('.gallery-slider', {
            speed: 400,
            loop: true,
            centeredSlides: true,
            autoplay: {
            delay: 5000,
            disableOnInteraction: false
            },
            slidesPerView: 'auto',
            pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
            },
            breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 20
            }
        }
    });
};

 /*** Initiate glightbox ***/
 const glightbox = GLightbox({
    selector: '.glightbox',
  });




/*** Background video opacity adjustment */
  window.addEventListener('scroll', function() {
    var scrollHeight = document.documentElement.scrollHeight;
    var scrollTop = document.documentElement.scrollTop;
    var windowSize = window.innerHeight;
    var scrollPercent = (scrollTop) / (scrollHeight - windowSize);
    
    var videoOpacity = 1;
    if (scrollPercent >= 0.05) {
      videoOpacity = 1 - ((scrollPercent - 0.1) * 1.25); // adjust this calculation accordingly
      if (videoOpacity < 0) videoOpacity = 0;
    }
    
    document.getElementById('bg-video').style.opacity = videoOpacity;
  });
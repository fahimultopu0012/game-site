
jQuery('.owl-carousel').owlCarousel({

    loop:true,

    margin:10,

    dots: true,

    autoplay: 3000, // time for slides changes

    smartSpeed: 1000, // duration of change of 1 slide

    responsiveClass:true,

    responsive:{

        0:{

            items:1

        },
        500:{

            items:2,
            loop:true

        },

        600:{

            items:3,
            loop:true

        },

        1000:{

            items:5,

            loop:true

        }

    }

});


var navIcon = document.querySelector(".icon-nav");

var nav = document.querySelector("nav");
var closeBtn = document.querySelector(".icon-close");
navIcon.addEventListener("click", ()=>{

    nav.classList.add('active');
    
    navIcon.style.display = "none";
     closeBtn.style.display= "block";

});
closeBtn.addEventListener("click", ()=>{
    nav.classList.remove("active");
     closeBtn.style.display= "none";
     navIcon.style.display = "block";
});

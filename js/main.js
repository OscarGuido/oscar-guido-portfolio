$(document).ready(function(){

    //Magnific Popup certifications section
    let $btns_certifications=$('.certifications-area .button-group button')
    $btns_certifications.click(function(e){
        $('.certifications-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        console.log(selector);
        $('.certifications-area .grid').isotope({
            filter: selector
        });
        return false;
    })
    $('.certifications-area .button-group #btn1').trigger('click');
    $('.certifications-area .grid .test-popup-link').magnificPopup({
        type:'image',
        gallery:{enabled:true}
    });

    //Magnific Popup projects section
    let $btns_projects=$('.projects-area .button-group button')
    $btns_projects.click(function(e){
        $('.projects-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        console.log(selector);
        $('.projects-area .grid').isotope({
            filter: selector
        });
        return false;
    })
    $('.projects-area .button-group #btn2').trigger('click');
    $('.projects-area .grid .test-popup-link').magnificPopup({
        type:'image',
        gallery:{enabled:true}
    });


    //owl-carousel
    $('.site-main .experience-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive:{
           0:{
               items:1
           },
           800:{
               items:2
           } 
        }
    })

    // sticky navigation menu
    let nav_offset_top = $('.header_area').height() + 10;
    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }
    navbarFixed();

});

$('.program__item-box').click(function (event) {
    $(this).toggleClass('program__item-box--active').next().slideToggle(300);
})

$('.top__list').slick({
    responsive: [
        {
           breakpoint: 2000,
           settings: "unslick",
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                centerMode: true,
                arrows: false,
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                centerMode: true,
                arrows: false,
            }
        },
        {
            breakpoint: 577,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                arrows: false,
            }
        },
        {
            breakpoint: 441,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                arrows: false,
            }
        },
        
     ]
    
  });
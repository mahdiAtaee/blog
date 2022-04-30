//toggle link page menu

$('.show_link a').click(function (e) {
    e.preventDefault();
    var thisP = $(this).parent();
    var nav = thisP.parent().parent();
    if (thisP.hasClass('open')) {
        nav.addClass('hide');
        $('.show_link').addClass("close");
        $('.show_link').removeClass("open");
    } else {
        nav.removeClass('hide');
        $('.show_link').removeClass("close");
        $('.show_link').addClass("open");
    }
});



//arrow up settings

// const arrow = document.querySelector('.arrow-wrapper');


// document.addEventListener('scroll', () => {
//     arrow.classList.remove('active');

//     if (window.pageYOffset > 600) {
//         arrow.classList.add('active');
//     }
// });

// arrow.addEventListener('click', () => {
//     scrollTo(0, 0)
// });




//dark mode
const darkEle = document.querySelector('.dark_mode');

darkEle.addEventListener('click',function (e) {
    e.preventDefault();
    document.body.classList.toggle('dark');
});


$('#add').click(function(e){
    e.preventDefault();
    $('.circle-container').toggleClass('open');
    $('#add').toggleClass('active');
    $('.circle-container .items').toggleClass('active');
});




$('.mobile-btn').on('click', function () {
    $('.mobile-btn') .toggleClass('show-mobile-btn')
    $('.menu') .toggleClass('show-menu')
});

$('.menu a').on('click', function () {
    $('.mobile-btn') .removeClass('show-mobile-btn')
    $('.menu') .removeClass('show-menu')
});
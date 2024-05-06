$('.buttonShow').on('click', function () {
    $('.modal, .overlay').addClass('show');
});

$('.buttonHide').on('click', function () {
    $('.modal, .overlay').removeClass('show');
});
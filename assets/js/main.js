$('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active')
});

$('#form-search').hide();
$('.show-cart').hide();

$('.fa-search').on('click', function() {
    $('#form-search').slideToggle();
    $('.form-control').focus();
});

$('.fa-cart-plus').on('click', function() {
	$('.show-cart').slideToggle();
});


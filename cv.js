$('img').fadeOut()
$('.imagen').fadeOut()
$('.cuerpo').fadeOut()
$('.texto').fadeOut()

$(document).ready(function() {
  $(".nombre").addClass('nombre1')
  $('img').fadeIn(1500)
  $('.imagen').fadeIn(2500)
  $('.cuerpo').fadeIn()
});

$(document).scroll(function() {
	$('.texto').fadeIn(5000)
});
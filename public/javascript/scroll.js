 // Back to top!!
$(document).ready(function() {
  function checkPosition() {
    if ($(this).scrollTop() > 200) {
      $('.go-top').fadeIn(500);
    } 
    else {
      $('.go-top').fadeOut(300);
    }
  }
  // Show or hide the sticky footer button
  $(window).scroll(checkPosition);

  // Animate the scroll to top
  $('.go-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 1000);
  });
  checkPosition();
});
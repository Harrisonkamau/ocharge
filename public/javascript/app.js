// Nav hamburger menu
$(function() {
  $( ".icn" ).click(function() {
    $( ".hide-nav" ).toggleClass( "show-nav", 400 );
  });
});
// Nav-home hamburger menu
$(function() {
  $( ".icn-home" ).click(function() {
    $( ".hide-nav" ).toggleClass( "show-nav", 400 );
  });
});
$('#points').hide();
$('#deals').hide();
// points
$(function() {
	$( ".points" ).click(function() {
    $( "#points" ).show();
    $('#recharge').hide();
    $("#deals").hide();
    $(".off-po").addClass("on-po");
    $(".off-re").removeClass("on-re");
    $(".off-de").removeClass("on-de");
  });
});
// deals
$(function() {
  $( ".deals" ).click(function() {
    $( "#deals" ).show();
    $('#recharge').hide();
    $("#points").hide();
    $(".off-de").addClass("on-de");
    $(".off-re").removeClass("on-re");
    $(".off-po").removeClass("on-po");
  });
});
// Recharge
$(function() {
  $( ".recharge" ).click(function() {
    $( "#recharge" ).show();
    $('#deals').hide();
    $("#points").hide();
    $(".off-re").addClass("on-re");
    $(".off-de").removeClass("on-de");
    $(".off-po").removeClass("on-po");
  });
});
// ************
// Mobile slides!
// ************
// points
$(function() {
  $( ".points-dot" ).click(function() {
    // phones
    $( "#points" ).show();
    $('#recharge').hide();
    $("#deals").hide();
    // texts
    $(".points").show();
    $('.recharge').hide();
    $(".deals").hide();
    // colors text
    $(".off-po").addClass("on-po");
    $(".off-re").removeClass("on-re");
    $(".off-de").removeClass("on-de");
    // colors dots
    $(".po-off").addClass("po-on");
    $(".re-off").removeClass("re-on");
    $(".de-off").removeClass("de-on");
  });
});
// deals
$(function() {
  $( ".deals-dot" ).click(function() {
    // phones
    $( "#deals" ).show();
    $('#recharge').hide();
    $("#points").hide();
    // texts
    $(".deals").show();
    $('.recharge').hide();
    $(".points").hide();
    // colors text
    $(".off-de").addClass("on-de");
    $(".off-re").removeClass("on-re");
    $(".off-po").removeClass("on-po");
    // colors dots
    $(".de-off").addClass("de-on");
    $(".re-off").removeClass("re-on");
    $(".po-off").removeClass("po-on");
  });
});
// Recharge
$(function() {
  $( ".recharge-dot" ).click(function() {
    // phones
    $( "#recharge" ).show();
    $('#points').hide();
    $("#deals").hide();
    // texts
    $(".recharge").show();
    $('.points').hide();
    $(".deals").hide();
    // colors text
    $(".off-re").addClass("on-re");
    $(".off-de").removeClass("on-de");
    $(".off-po").removeClass("on-po");
    // colors dots
    $(".re-off").addClass("re-on");
    $(".po-off").removeClass("po-on");
    $(".de-off").removeClass("de-on");
  });
});

// SMS link
$('.message-sent').hide();
$(function(){
	$('.msg-lnk').submit(function(){
		$('.message-link').fadeOut();
		$('.message-sent').fadeIn();
	});
});
// Contact form
$('.contact-message').hide();
$(function(){
  $('.cnt-lnk').submit(function(){
    $('.contact-form').fadeOut();
    $('.contact-message').fadeIn();
  });
});
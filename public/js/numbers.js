$( document ).on( "ready", function() {
  $("#sendsms").submit(function(e) {
    e.preventDefault();
    $.ajax({
      type: 'post',
      url: '/api/numbers',
      data: $('#sendsms').serialize(),
      success: function () {
        alert("SMS has been sent!");
      }
    });
  });
});

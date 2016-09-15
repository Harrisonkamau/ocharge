$( document ).on( "ready", function() {
  alert('afddsaf');
  $("#sendsms").submit(function(e) {
    console.log(e)
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

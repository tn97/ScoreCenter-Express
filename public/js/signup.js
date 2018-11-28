$(".submit-button").on("click", function() {
  var userInformation = {
    email = $("#email").val().trim(),
    password = $("#pwd").val().trim(),
    dispName = $("#display-name").val().trim()
  };
  
  $.post(/api/, userInformation)

  .then(function(data) {
    console.log(data);

  });

  $("#email").val("");
  $("#pwd").val("");
  $("#display-name").val("");
})
$(document).ready(function () {
  // Getting references to our form and input
  const $signUpForm = $("form.signup");
  const $emailInput = $("input#email-input");
  const $passwordInput = $("input#password-input");

  // When the signup button is clicked, we validate the email and password are not blank
  $signUpForm.on("submit", function (event) {
    event.preventDefault();

    const formData = {
      email: $emailInput.val().trim(),
      password: $passwordInput.val().trim()
    };
    
    // If we have an email and password, run the signUpUser function
    signUpUser(formData);
    $emailInput.val("");
    $passwordInput.val("");

  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(formData) {
    $.ajax({
      url: "/api/signup",
      data: formData,
      method: 'POST',
    }).then(function (data) {
      console.log(data);
      window.location.replace(data)
      // If there's an error, handle it by throwing up a bootstrap alert
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    console.log(err.responseJSON.errors[0].message);
$("#alert .msg").text(err.responseJSON.errors[0].message);
    $("#alert").fadeIn(500);
  }

});
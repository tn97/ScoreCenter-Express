$(document).ready(function () {
  // Getting references to our form and input
  const $signUpForm = $("form.signup");
  const $usernameInput = $("input#username-input");
  const $passwordInput = $("input#password-input");
  const $teamInput = $("input#team-input");

  // When the signup button is clicked, we validate the username and password are not blank
  $signUpForm.on("submit", function (event) {
    event.preventDefault();

    const formData = {
      username: $usernameInput.val().trim(),
      password: $passwordInput.val().trim(),
      team: $teamInput.val().trim()
    };
    
    // If we have an username and password, run the signUpUser function
    signUpUser(formData);
    $usernameInput.val("");
    $passwordInput.val("");
    $teamInput.val("");
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
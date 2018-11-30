
// $("#submit-chat").on("click", () => {
//  const message = $("#text-message").val().trim();
//  console.log(message)


//  const logo = "./photos/eagles.gif"
//  const timeStamp = moment().format("MM/DD/YYYY h:mma");
//  const username = "LII41333733"

//  let $chatMessage = `
//   <div class="text-message mt-3">
//    <div class="row align-items-center">
//     <div class="col-1 ">
//      <img class="text-icon" src="${logo}">
//    </div>
//    <div class="col-11">
//      <p class="text-msg"><span class="username">${username} | ${timeStamp}: &nbsp;  </span>${message}</p>
//    </div>
//  </div>
// </div>`

// $('.chat-div').append($chatMessage)
// $('#text-message').val("");


// })

// $("#clear-chat").on("click", () => {
//  $('#text-message').val("");
// })

$(function () {
  var socket = io.connect();
  var $messageForm = $('#messageForm');
  var $message = $('#message');
  var $chat = $('#chat');
  var $messageArea = $('#messageArea');
  var $userFormArea = $('#userFormArea');
  var $userForm = $('#userForm');
  var $users = $('#users');
  var $username = $('#username');

  $userFormArea.hide();
  $messageArea.show();

  $messageForm.submit(function (e) {
    e.preventDefault();
    socket.emit('send message', $message.val());
    $message.val('');
  });

  socket.on('new message', function (data) {
    $chat.append('<div class="bg-light"><strong>' + data.user + '</strong>:' + data.msg + '</div>');
  });

  $userForm.submit(function (e) {
    e.preventDefault();
    socket.emit('new user', $username.val(), function (data) {
      if (data) {
        console.log(data)

      }
    });
    $username.val('');
  });

  socket.on('get users', function (data) {
    var html = '';
    for (var i = 0; i < data.length; i++) {
      html += '<li class="list-group-item">' + data[i] + '</li>';
    }
    $users.html(html);
  })

});

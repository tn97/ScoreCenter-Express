
$("#submit-chat").on("click", () => {
 const message = $("#text-message").val().trim();
 console.log(message)


 const logo = "./photos/eagles.gif"
 const timeStamp = moment().format("MM/DD/YYYY h:mma");
 const username = "LII41333733"

 let $chatMessage = `
  <div class="text-message mt-3">
   <div class="row align-items-center">
    <div class="col-1 ">
     <img class="text-icon" src="${logo}">
   </div>
   <div class="col-11">
     <p class="text-msg"><span class="username">${username} | ${timeStamp}: &nbsp;  </span>${message}</p>
   </div>
 </div>
</div>`

$('.chat-div').append($chatMessage)
$('#text-message').val("");


})

$("#clear-chat").on("click", () => {
 $('#text-message').val("");
})

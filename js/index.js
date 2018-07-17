$("#appear").on('click', function(){
  $('#asta').show()
})

$("#disappear").on('click', function(){
  $('#asta').hide()
})

//jquery toggle

$("#both").on('click', function(){
  $("#asta").toggle()
})

$("#fade").on('click', function(){
  $("#asta").toggleClass("fade")
})

$('#asta').hover(function(){
    $(this).attr("src",'https://www.w3schools.com/w3css/img_lights.jpg');
    }, function(){
    $(this).attr("src", 'https://vignette.wikia.nocookie.net/blackclover/images/9/98/Asta_profile.png/revision/latest?cb=20150719164752');
})
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
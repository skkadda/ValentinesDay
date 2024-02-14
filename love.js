// $('#bebra2').on( "click", function() {
//       $( "#bebra" ).animate({height: '300px', width: '300px'}, "slow");
//   } );

document.getElementById('bebra2').addEventListener('click', function() {
  var object = document.getElementById('bebra');
  var currentWidth = object.offsetWidth;
  var currentHeight = object.offsetHeight;
  
  object.style.width = (currentWidth + 20) + 'px';
  object.style.height = (currentHeight + 20) + 'px';
});

document.getElementById('bebra2').addEventListener('click', function() {
  var textObject = document.getElementById('bebra2');
  var currentText = textObject.innerText;
  textObject.innerText = 'я обіделась';

});


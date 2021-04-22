$(document).ready(function(){
   
  $('a[data-toggle="formtab"]').click(function(){
    var targetId = $(this).attr('href');

    $('.right_cont').removeClass('active')
    $('a[data-toggle="formtab"]').removeClass('active');
    
    $(targetId).addClass('active');
	$('a[href="'+targetId+'"]').addClass('active')
});

  var fileInput  = document.querySelector( ".input-file" ),  
      button     = document.querySelector( ".input-file-trigger" ),
      the_return = document.querySelector(".file-return");
        
  button.addEventListener( "keydown", function( event ) {  
      if ( event.keyCode == 13 || event.keyCode == 32 ) {  
          fileInput.focus();  
      }  
  });
  button.addEventListener( "click", function( event ) {
    fileInput.focus();
    return false;
  });  
  fileInput.addEventListener( "change", function( event ) {  
      the_return.innerHTML = this.value;  
  });  


});


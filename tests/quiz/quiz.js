$(window).load(function(){
        $('#myModal').modal({
    			backdrop: 'static',
				keyboard: false
			});
    });

$("label.btn").on('click',function () {
    $(this).parent('div.quiz').find('i').removeClass('glyphicon-remove');
    $(this).find('i').addClass('glyphicon-remove');

    $(this).parent('div.quiz').find('.btn-success').addClass('btn-default').removeClass('btn-success');
    $(this).addClass('btn-success');

  	var choice = $(this).find('input:radio').val();

 	$( "#answer" ).html(  $(this).checking(choice)+ " is checked!" );
});

$ans = 3;

$.fn.checking = function(ck) {
      if (ck != $ans)
      	return 'INCORRECT';
  	else
      return 'CORRENT';
};

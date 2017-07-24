$(function(){
	$('#text1').blur(function(){
		if($('#text1').val().length>20){
			$('#div_cont').html("短信内容超出规定字数!");
			$('#div_cont').css('color','red');
		}else{
			$('#div_cont').html('确定提交!');
			$('#div_cont').css('color','greenyellow');
		}
	})
	$('#submit').click(function(){
		if($('#text1').val()=='' ||$('#text1').val().length>20){
			$("#submit").attr("href","#")
		}
	})
})

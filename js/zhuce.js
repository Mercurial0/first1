(function(win, doc) {
	//浏览器缩放时
	win.onresize = function() {
		change();
	};
	change();

	function change() {
		var oFs = doc.documentElement.clientWidth / (375 / 20);

		//设置根目录字体大小
		doc.documentElement.style.fontSize = oFs + 'px';
	}
})(window, document);

$(function(){
	
	$(".xuanxiang li").click(function(){
		$('.xuanxiang li').removeClass('one');
		$('.xuanxiang div').removeClass('show');
		$(this).addClass('one');
		$('.xuanxiang div').eq($(this).index()).addClass('show');
	})
	
	$('.header_top p').click(function(){
		$('.tongji').toggle();
	})
})

(function(win,doc){
	//浏览器缩放时
	win.onresize=function(){
		change();	
	};
	change();
	function change(){
		var oFs=doc.documentElement.clientWidth/(320/20);
		doc.documentElement.style.fontSize=oFs+'px';	
	}	
})(window,document);


(function($){
	var index = 0;
	li = $(".carousel>ul>li").length;
	ul = $(".carousel>ul");
	span = $("#icon>span");
	
	function change(){
		if(index>=li-1){
			index=0;
			ul.css("margin-left",0);
		}
		index++;
		chimg(index);
	}
	
	
	var timer = setInterval(change,2000);
	
	$('.carousel').swipeLeft(function () {
       clearInterval(timer);
        timer = setInterval(change,2000);
       chimg(index);
    }).swipeRight(function () {
        clearInterval(timer);
        timer = setInterval(change,2000);
        index--;
        if (index<0){
            index=li-1;
            var s ="-"+(li-1)*100+"%";
            ul.css("margin-left",s);
        }
        chimg(index);
    })
	function chimg(index){
		var mar = "-"+100*index+"%";
		ul.animate({marginLeft:mar},1000);
//      ul.css({'margin-left':mar,'transition':'margin-left 1s'});
		
		if(index==li-1){
			span.eq(0).addClass('on').siblings().removeClass('on');			
		}
		span.eq(index).addClass('on').siblings().removeClass('on');
	}
});



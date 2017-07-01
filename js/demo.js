



function myFunction(){
	location.href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=2&tn=baiduhome_pg&wd=%E4%BA%BA%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E6%B4%BB%E7%9D%80%EF%BC%9F&rsv_spt=1&oq=%25E4%25BD%25A0%25E5%25A5%25BD&rsv_pq=92a3b018000cc4d4&rsv_t=7444WIiqQRJLyLY2%2F0WhPBqSzNZvHJkzszMQNF1baXu1otoxV7%2BVZxtA2TPRyZdDAtfr&rqlang=cn&rsv_enter=1&rsv_sug3=24&rsv_sug1=19&rsv_sug7=100&rsv_sug2=0&inputT=4288&rsv_sug4=4288" ;
}
	
$(function(){
	if( $.cookie("bg-pic") == "" || $.cookie("bg-pic") == null ){
		$("body").css("background-image","url(img/2222.jpg)");
	}
	else{
		$("body").css("background-image","url('"+ $.cookie("bg-pic") +"')");
	}
	$(".title1 a").click(function(){
		$(".imglist").slideDown();
	});
	$(".title2 a").click(function(){
		$(".imglist").slideUp();
	});

	$(".imgitem img").click(function(){
		var src = $(this).attr("src");
		$("body").css("background-image","url('"+ src +"')");
		$.cookie("bg-pic",src,{expires:7});
	});
});




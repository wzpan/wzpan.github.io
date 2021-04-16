$(document).ready(function() {
    $(window).scroll(function(){  //只要窗口滚动,就触发下面代码 
        var scrollt = document.documentElement.scrollTop + document.body.scrollTop; //获取滚动后的高度 
        if(scrollt<500){  //判断滚动后高度不超过400px
            if ($("#post_meta .meta-toc").length > 0) {
                $("#post_meta .meta-toc").fadeTo(100, 1);
            }
        } else {
            if ($("#post_meta .meta-toc").length > 0) {
                $("#post_meta .meta-toc").fadeTo(100, 0.2);
            }
        }
    });

    $("#post_meta .meta-toc").mouseenter(function(){
        if ($("#post_meta .affix").length > 0) {
		    $("#post_meta .affix").fadeTo(100, 1);
        }
	});
    $("#post_meta .meta-toc").mouseleave(function(){
        if ($("#post_meta .affix").length > 0) {
		    $("#post_meta .affix").fadeTo(100, 0.2);
        }
	});
});

$(document).ready(function() {
	$(window).scroll(function(){  //只要窗口滚动,就触发下面代码 
        var scrollt = document.documentElement.scrollTop + document.body.scrollTop; //获取滚动后的高度 
        if(scrollt>200){  //判断滚动后高度超过200px
            $("#gotop").fadeIn(400); //淡出
			if($(window).width() >= 1200){
				$(".navbar").stop().fadeTo(400, 0.2);
			}
        }else{
            $("#gotop").fadeOut(400); //如果返回或者没有超过,就淡入.必须加上stop()停止之前动画,否则会出现闪动
            if($(window).width() >= 1200){
				$(".navbar").stop().fadeTo(400, 1);
            }
        }        
    });
    $("#gotop").click(function(){ //当点击标签的时候,使用animate在200毫秒的时间内,滚到顶部        
		$("html,body").animate({scrollTop:"0px"},200);
    });
	$(".navbar").mouseenter(function(){
		$(".navbar").fadeTo(100, 1);
	});
    $(".navbar").mouseleave(function(){
		var scrollt = document.documentElement.scrollTop + document.body.scrollTop;
		if (scrollt>200) {
			$(".navbar").fadeTo(100, 0.2);
		}
	});
    $(".post #toc").mouseenter(function(){
        if ($(".post #toc .affix").length > 0) {
		    $(".post #toc .affix").fadeTo(100, 1);
        }
	});
    $(".post #toc").mouseleave(function(){
        if ($(".post #toc .affix").length > 0) {
		    $(".post #toc .affix").fadeTo(100, 0.2);
        }
	});
    

	replaceMeta();

	$(window).resize(function(){
		replaceMeta();
	});

    if (window.location.host.indexOf('hahack.com') < 0 && window.location.host.indexOf('localhost') < 0 && window.location.host.indexOf('wzpan.vercel.app') < 0) {
        $('#main-nav').remove();
        $('.container').remove();
        $('.clearfix').append(window.decodeURIComponent(window.atob("JTNDY2VudGVyJTNFJTNDcCUyMHN0eWxlJTNEJTIyZm9udC1zaXplJTNBMTIwcHglM0IlMjBjb2xvciUzQSUyM2ZmMDAwMCUzQiUyMiUzRSVFNiU4QSU4NCVFOCVBMiVBRCVFNSU4RiVBRiVFOCU4MCVCQiVFRiVCQyU4QyVFNyU5QiU5NyVFNyVBQiU5OSVFNCVCOCVBMiVFNCVCQSVCQSUzQyUyRnAlM0UlM0NwJTNFJUU1JTk2JTlDJUU2JUFDJUEyJUU4JUJGJTk5JUU0JUI4JUFBJUU3JUFCJTk5JUU3JTgyJUI5JUU0JUI4JUJCJUU5JUEyJTk4JUVGJUJDJThDJUU4JUFGJUI3JUU0JUJEJUJGJUU3JTk0JUE4JTNDYSUyMGhyZWYlM0QlMjJodHRwcyUzQSUyRiUyRmdpdGh1Yi5jb20lMkZ3enBhbiUyRmhleG8tdGhlbWUtZnJlZW1pbmQlMjIlMjB0YXJnZXQlM0QlMjJfYmxhbmslMjIlM0VoZXhvLXRoZW1lLWZyZWVtaW5kJTNDJTJGYSUzRSUzQyUyRnAlM0UlM0NwJTNFJUU1JTk2JTlDJUU2JUFDJUEyJTIwd3Vrb25nLXJvYm90JTIwJUVGJUJDJThDJUU4JUFGJUI3JUU1JThGJTgyJUU0JUI4JThFJUU4JUI0JUExJUU3JThDJUFFJUVGJUJDJThDJUU4JTgwJThDJUU0JUI4JThEJUU4JUE2JTgxJUU2JTk0JUI5JUU1JTkwJThEJUU4JUFGJUI0JUU2JTg4JTkwJUU4JTg3JUFBJUU1JUI3JUIxJUU3JUE3JUJCJUU2JUE0JThEJUU0JUJBJTg2JUU0JUJEJTlDJUU1JTkzJTgxJUUzJTgwJTgyJTNDJTJGcCUzRSUzQyUyRmNlbnRlciUzRQ==")));
        setTimeout(()=>{
            alert(window.decodeURIComponent(window.atob('JUU4JUFEJUE2JUU1JTkxJThBJUVGJUJDJTlBJUU0JUJEJUEwJUU2JUFEJUEzJUU1JTlDJUE4JUU4JUFFJUJGJUU5JTk3JUFFJUU3JTlBJTg0JUU3JUFCJTk5JUU3JTgyJUI5JUU2JTk4JUFGJUU0JUI4JTgwJUU0JUI4JUFBJUU2JTlDJUFBJUU3JUJCJThGJUU1JThFJTlGJUU0JUJEJTlDJUU4JTgwJTg1JUU2JThFJTg4JUU2JTlEJTgzJUU3JTlBJTg0JUU1JUE1JTk3JUU1JUEzJUIzJUU1JThEJTlBJUU1JUFFJUEyJUVGJUJDJThDJUU1JThEJUIzJUU1JUIwJTg2JUU0JUI4JUJBJUU2JTgyJUE4JUU5JTg3JThEJUU1JUFFJTlBJUU1JTkwJTkxJUU1JTg4JUIwJTIwaHR0cCUzQSUyRiUyRmhhaGFjay5jb20lMjAlRTglQUUlQkYlRTklOTclQUUlRTUlOEUlOUYlRTQlQkQlOUMlRTglODAlODUlRTUlOEQlOUElRTUlQUUlQTI=')));
            window.location.href="http://hahack.com";
        }, 5000);
    }    
});

replaceMeta = function(){
	if ($(window).width() < 980) {
		if ($("#side_meta #post_meta").length>0) {
			$("#post_meta").appendTo("#top_meta");
		}
		if ($("#sidebar #site_search").length>0) {
			$("#site_search").appendTo("#top_search");
			$("#site_search #st-search-input").css("width", "95%");
		}
	} else {
		if ($("#top_meta #post_meta").length>0) {
			$("#post_meta").appendTo("#side_meta");
		}
		if ($("#top_search #site_search").length>0) {
			$("#site_search").prependTo("#sidebar");
			$("#site_search #st-search-input").css("width", "85%");
		}
	}
}

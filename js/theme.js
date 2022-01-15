var getCookie = function(key) {
    //获取cookie字符串
    var strCookie=document.cookie;
    //将多cookie切割为多个名/值对
    var arrCookie=strCookie.split("; ");
    
    //遍历cookie数组，处理每个cookie对
    for(var i=0;i<arrCookie.length;i++){
        var arr=arrCookie[i].split("=");
        if (key==arr[0]) {
            return arr[1];
        }
    };
    document.cookie=`${key}=cerulean; domain=www.hahack.com; maxAge=0`;
    document.cookie=`${key}=cerulean; domain=www.hahack.com`;
    return "cerulean";
}

var deleteCookie = function(key) {
    document.cookie=`${key}=cerulean; domain=www.hahack.com; maxAge=0`;    
}

$(document).ready(function() {
    $("#theme").attr("href", `/css/themes/${getCookie('theme')}.css`);
});

/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-12-05 23:31:16
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-12-13 10:54:50
 * @FilePath: \WEB_practice\scripts\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 服务搜索 调用外链
$("#search_1").click(function () {
    window.open("http://www.sczwfw.gov.cn/jsearchfront/search.do?websiteid=510500000000000&q=" + $("#input_search").val());
});

// 内容搜索 调用外链
$("#search_2").click(function () {
    window.open("http://www.luzhou.gov.cn/s?wd=" + $("#input_search").val() + "&tt=0&bt=&et=&kp=0&st=2&iiid=0&siid=0&csid=0&sid=0&vc=");
});

//    点击回到顶部
var returnTop = $(".return-top");
returnTop.click(function () {
    $("html,body").animate({
        scrollTop: 0
    }, 1000);
});
$(window).bind("scroll", function () {
    var top = $(this).scrollTop(); // 当前窗口的滚动距离
    if (top >= 200) {
        returnTop.css("visibility", "visible");
    } else {
        returnTop.css("visibility", "hidden");
    }
});


// 跳转我的账户页面
$("#account_btn").click(function () {
    $("#main_box").hide();
    $("#sub_box").removeClass("d-none");
    $("#index_account").addClass("d-none");
    $("#sub_box").attr("src", "./account.html");
});
$("#account_btn_temp").click(function () {
    $("#main_box").hide();
    $("#sub_box").removeClass("d-none");
    $("#index_account").addClass("d-none");
    $("#sub_box").attr("src", "./account.html");
});


// 跳转景点页面
$("#btn_senic").click(function () {
    $("#main_box").hide();
    $("#sub_box").removeClass("d-none");
    $("#sub_box").attr("src", "./scenic.html");
});

// 跳转旅游路线界面
$("#btn_route").click(function () {
    $("#main_box").hide();
    $("#sub_box").removeClass("d-none");
    $("#sub_box").attr("src", "./route.html");
});

// 跳转美食界面
$("#item_1").click(function () {
    $("#main_box").hide();
    $("#sub_box").removeClass("d-none");
    $("#sub_box").attr("src", "./food.html");
});

// 跳转时事政治界面
$("#item_2").click(function () {
    $("#main_box").hide();
    $("#sub_box").removeClass("d-none");
    $("#sub_box").attr("src", "./politics.html");
});

// 跳转购物界面
$("#item_3").click(function () {
    $("#main_box").hide();
    $("#sub_box").removeClass("d-none");
    $("#sub_box").attr("src", "./shopping.html");
});

// 点击小卡片关闭
$("#info_author_close").click(function(){
    $(".info_author").css("display", "none");
});
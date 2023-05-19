// 主程式
$(".ad-toggle-btn").click(function () {
    // 點擊後要觸發的特效。
    // 讓.ad-box的元素切換active分類
    $(".ad-box").toggleClass("active");
});

$(".navbar .nav-link").click(function () {
    // 1.取得被點到的按鈕
    // 2.取得按鈕href目標
    // 3.取得目標座標
    // 4.執行動畫
    console.log(this);
    const target = $(this).attr("href");
    // console.log("移動目標", target);
    const position = $(target).offset().top
    // console.log("移動座標", position);
    // 連點之後發現，預設動畫會一值累積秒數
    $("html,body").stop().animate({
        scrollTop: position
    }, 1000);
});
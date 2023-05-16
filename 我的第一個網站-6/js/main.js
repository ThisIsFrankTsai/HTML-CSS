// JS註解
// $("CSS選擇器")=>jQuery選擇器(函數)
// 綁定.navbar-toggler的點擊事件
// function(){}
// 
$(".toggler").click(function () {
    $(".list").toggleClass("active");
    $(".line").toggleClass("active");
});


// 小提醒:
// 1.CSS選擇器有沒有.差很多一個是class，另一個是標籤
// 2.jQuery=$ 如果出現$ not define 則有可能未引用或引用錯誤
// 3.錯誤可以在之前介紹的檢查工具中，選擇console看到錯誤訊息
// 4.addClass 的C是大寫
// 5.小駝峰式命名法，第一個單字寫小寫，其他單字首字大寫。

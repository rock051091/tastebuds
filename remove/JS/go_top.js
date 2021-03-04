// DOM 載入完成後執行
$(function(){
  
    // 點擊按鈕，頁面滑到最上方
    $("#go_top").on("click", function(e){
      e.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 750);
    });
    
  });
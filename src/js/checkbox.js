$(function(){
   var wholecheck=$('.checkall');
   var shopcheck=$('.shopcheck');
   var cartmain=$('.cartmain');
   var check2=$('.cart-item .itemcontent .td-check .check1');
   console.log(check2);
   wholecheck.on('click',function(){
    let checkboxs = cartmain.find('input[type="checkbox"]');
    if ($(this).is(':checked')) {
        checkboxs.prop("checked", true);
    } else {
        checkboxs.prop("checked", false);
    }
   })
   shopcheck.on('click',function(){
    let checkboxs = cartmain.find('input[type="checkbox"]');
    if ($(this).is(':checked')) {
        checkboxs.prop("checked", true);
    } else {
        checkboxs.prop("checked", false);
    }
   })
   check2.each(function () {
        $(this).click(function () {
            if ($(this).is(':checked')) {
                //判断：所有单个商品是否勾选
                var len = check2.length;
                var num1 = 0;
                check2.each(function () {
                    if ($(this).is(':checked')) {
                        num1++;
                    }
                });
                if (num1 == len) {
                    wholecheck.prop("checked", true);
                }
            } else {
                //单个商品取消勾选，全局全选取消勾选
                wholecheck.prop("checked", false);
            }
        })
    })
//    check2.each(function(){
//        $(this).on('click',function(){
//         if ($(this).is(':checked')) {
//            var len=check2.length;
//            console.log(len);
//            var num1=0;
//            check2.each(function () {
//             if ($(this).is(':checked')) {
//                 num1++;
//             }
//             });
//             if(len=num1){
//                 wholecheck.prop("checked", true);
//             }
//         }else{
//                 wholecheck.prop("checked", false);
//             }
//        })
//    })
})
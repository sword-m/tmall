$(function () {
    let shop = cookie.get('shop'); 
    shop = JSON.parse(shop); 
    let idList = shop.map(el => el.id).join();
  
    $.ajax({
      url: '../interface/shop.php',
      data: { idList },
      type: 'get',
      dataType: 'json'
    }).then(res => {
      let template = '';
      res.forEach(el => {
        let picture = JSON.parse(el.picture);
        let current = shop.filter(elm => elm.id == el.id);  
        template += `<div class="cart-item">
        <ul class="itemcontent">
            <li class="td-check">
                <div class="check">
                    <input type="checkbox" class="check1" data-id="${el.id}">
                </div>
            </li>
            <li class="td-item">
                <div class="item-pic">
                    <a href="">
                        <img src="${picture[0].src}" alt="">
                    </a>
                </div>
                <div class="item-info">
                    <a href="" class="item-title">${el.title}</a>
                </div>
            </li>
            <li class="td-price">
                <span class="price">
                    <em class="price-now" tabindex="0">￥${parseFloat(el.price).toFixed(2)}</em>
                </span>
            </li>
            <li class="td-count">
                <div class="item-count ">
                    <a href="#" class="no-minus">-</a>
                    <input type="text-count" data-id="${el.id}" value="${current[0].num}" class="text-count" autocomplete="off">
                    <a href="#" class="plus">+</a>
                </div>
            </li>
            <li class="td-sum">
                <em class="number">￥${(el.price * current[0].num).toFixed(2)}</em>
            </li>
            <li class="td-op">
                <a class="removeitem" href="" data-id="${el.id}">删除</a>
            </li>
        </ul>
    </div>`
      });
      $('.cartmain .cartcontent').html(template);
      let smalltotal=$('.cart-sum #J_SmallTotal');
      let bigtotal=$('.footerbar .rightbar .price-sum #J_Total');
      let numbers=$('.cart-item .itemcontent .td-sum .number');
      numbers= Array.from(numbers);
    //   console.log(numbers);
      let checks=$('.itemcontent .td-check .check1');
    //   let flag=false;
      
      
    //   $(checks).on('click',function(){
    //       if($(this).checked){

    //       }
    //   })
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
    totalMoney();
   })
   shopcheck.on('click',function(){
    let checkboxs = cartmain.find('input[type="checkbox"]');
    if ($(this).is(':checked')) {
        checkboxs.prop("checked", true);
    } else {
        checkboxs.prop("checked", false);
    }
    totalMoney();
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
                    shopcheck.prop("checked", true);
                }
            } else {
                //单个商品取消勾选，全局全选取消勾选
                wholecheck.prop("checked", false);
                shopcheck.prop("checked", false);
                
            }
            totalMoney();
        })
    })
    totalMoney();
    $(checks).on('click',function(){
        totalMoney();
    })  
      function totalMoney(){
        let realnumber=[];
        checks= Array.from(checks);
        checks.forEach(function(el,i){
            if(el.checked){
                realnumber.push(numbers[i]);
            }
        })
        let count=0;
        let num;
        realnumber.forEach(function(el){
            num=el.innerText.split('￥');
            num=parseFloat(num[1]);
            count=count+num;
        })
        count=count.toFixed(2);
      //   smalltotal.innerText=count;
        smalltotal.html(`<span class="total-symbol">&nbsp;￥</span>
        ${count}`);
        bigtotal.html(` <span class="total-symbol">&nbsp;￥</span>
        ${count}`)
      }

      $('.cartmain .cartcontent .removeitem').on('click', function () {
        let result = shop.filter(el => el.id != $(this).attr('data-id'));
        cookie.set('shop', JSON.stringify(result));
        location.reload();
      });
      $('.td-count .item-count .text-count').on('input',function(){
        let index = shop.findIndex(elm => elm.id == $(this).attr('data-id')); // 找到当前商品的索引
        shop[index].num=$(this).val();
        cookie.set('shop', JSON.stringify(shop));
        location.reload();
      })
    }).catch(xhr => {
      console.log(xhr.status);
    });
  });
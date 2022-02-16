$(function () {
    // 获得商品id
    // 商品id在url的search部分
    let id = location.search.split('=')[1]; 
    console.log(id);
    $.ajax({
      url: '../interface/getitem.php',
      type: 'get',
      data: { id },
      dataType: 'json'
    }).then(res => {
      let pic = JSON.parse(res.picture);
      console.log(pic);
      let sf=$('.tb-gallery #spic .sf');
      let imgs=$('.tb-gallery .wrap #ulist #list ul li img');
      let h1=$('.tb-wrap .tb-detail-hd h1');
      let price=$('.tb-wrap .tm-fcs-panel .tm-promo-panel .tm-promo-price .tm-price');
      let num=$('.tb-wrap .shul .ll .l');
      num.html('库存'+res.num+'件');
      price.html(res.price);
      h1.html(res.title);
    //   imgs=imgs.pop();
      imgs=Array.from(imgs);
      imgs.pop();
      imgs.pop();
      console.log(imgs);
      sf.attr('src',pic[5].src);
      imgs.forEach((ele,i)=> {
          $(imgs[i]).attr('src',pic[i+4].src);
      });
    //   let template = `
    //   <h1>${res.title}</h1>
    //   <div class="picture">
    //     <img src="./${pic[1].src}" />
    //   </div>
    //   <div>
    //     价格:<span>￥</span>${res.price}
    //   </div>
    //   <div>
    //     数量:${res.num}
    //   </div>
    //   <div>
    //     <input type="number" id="num" value="1" min="1" max="${res.num}">
    //     <input type="button" value="加入购物车" id="additem">
    //   </div>
    //   <div>
    //     ${res.details}
    //   </div>
    //   `;
    //   $('body').html(template);
    }).catch(xhr => {
      console.log(xhr.status);
    });
  
  });
$(function () {
    $.ajax({
      url: '../interface/getitems.php',
      type: 'get',
      dataType: 'json'
    }).then(res => {
    //   let template = '';
      let pics=$('.tmcs .product .pics');
      let titles=$('.tmcs .product .title');
      let prices=$('.tmcs .product .price')
      let links=$('.tmcs .product .link')
    //   console.log(pics);
      res.forEach((elm,i) => {
        let pic = JSON.parse(elm.picture);
        // console.log(elm.title);
        console.log(pic);
        // console.log(pics[i]);
        // console.log(titles[i]);
        $(titles[i]).html(elm.title);
        $(pics[i]).attr('src',pic[0].src);
        $(prices[i]).html('￥'+elm.price);
        // console.log(links[i]);
        $(links[i]).attr('href',"item.html?id="+`${elm.id}`);
        // template += `<li class="item">
        //             <a href="./item.html?id=${elm.id}">
        //               <div class="picture">
        //                 <img src="./${pic[0].src}" alt="">
        //               </div>
        //               <div class="title">
        //                 ${elm.title}
        //               </div>
        //               <div class="price">
        //                 <span class="yuan">￥</span>${elm.price}
        //               </div>
        //             </a>
        //           </li>`;
      });  
    //   $('.items').html(template);
    }).catch(xhr => {
      console.log(xhr.status);
    });
  });
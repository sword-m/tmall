
    //    获取小圆点
    var xiaoyuan = document.getElementsByClassName("xiaoyuan");
    //    获取装图片的盒子
    var imgbox = document.getElementById("imgbox");
    //     获取左右箭头
    var jiantou = document.getElementsByClassName("jiant");
    //小圆点控制图片
    xiaoyuan[0].onclick = function () {
        imgbox.style.left = 0;
    }
    xiaoyuan[1].onclick = function () {
        imgbox.style.left = "-520px";
    }
    xiaoyuan[2].onclick = function () {
        imgbox.style.left = "-1040px";
    }
    xiaoyuan[3].onclick = function () {
        imgbox.style.left = "-1560px";
    }
    xiaoyuan[4].onclick = function () {
        imgbox.style.left = "-2080px";
    }
    //左箭头控制图片
    jiantou[0].onclick = function () {
        if (imgbox.offsetLeft == 0) {
            imgbox.style.left = "-2080px";
            console.log(imgbox.offsetLeft);
        } else {
            imgbox.style.left = imgbox.offsetLeft + 520 + "px";
        }
    }
    //右箭头控制图片
    jiantou[1].onclick = function () {
        if (imgbox.offsetLeft <= -2080) {
            console.log(imgbox.offsetLeft);
            imgbox.style.left = 0;
        } else {
            imgbox.style.left = imgbox.offsetLeft - 520 + "px";
        }
    }
    //定时器控制图片轮播
    var fun1 = function () {
        if (imgbox.offsetLeft <= -2080) {
            imgbox.style.left = 0;
        } else {
            imgbox.style.left = imgbox.offsetLeft - 520 + "px";
        }
    }
    var t = setInterval(fun1, 2500);//fun1是你的函数
    // 鼠标经过停止轮播
    imgbox.onmouseover = function () {
        clearInterval(t) //关闭定时器
    }
    // 鼠标离开开启定时器 
    imgbox.onmouseout = function () {
        t=setInterval(fun1,2500)//重新开始定时器
    }

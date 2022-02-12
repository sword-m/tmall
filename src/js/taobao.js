/**
 * Created by zhm on 17.1.15.
 */
//1.获取元素
     var container = document.getElementById("container");
     var list = document.getElementById("list");
     var buttons = document.getElementById("buttons").getElementsByTagName("span");
     var prev = document.getElementById("prev");
     var next = document.getElementById("next");

    //设置标志位
    var flag = true;
    var index = 0;
    var timer1 = null;
    var timer2 = null;

    //2.设置函数元素左右移动

    function move(dis){
        //设置每一移动一小步
        var allTime = 400;
        var eachTime = 10;
        var eachDis = dis/(allTime/eachTime);
        var newDis = parseInt(list.style.left)+dis;
        flag = false;

        function eachMove(){
            if(dis<0&&parseInt(list.style.left)>newDis||dis>0&&parseInt(list.style.left)<newDis){
                list.style.left = parseInt(list.style.left) + eachDis + 'px';
            }else{
                flag = true;
                clearInterval(timer1);
                list.style.left = newDis + 'px';
                //设置无限滚动
                if(newDis == 0){
                    list.style.left = -2600+ 'px';
                }
                if(newDis == -3120){
                    list.style.left = -520+ 'px';
                }

            }
        }
        timer1 = setInterval(eachMove,10);
    }

    //3.设置点击切换图片
    next.onclick = function () {
        if(!flag) return;
        //绑定箭头和小圆点
        if (index == 4) {
            index = 0;
        } else {
            index++;
        }
        move(-520);
        showCircle();
    };
    prev.onclick = function () {
        if(!flag) return;
        //绑定箭头和小圆点
        if (index == 0) {
            index = 4;
        } else {
            index--;
        }
        move(520);
        showCircle();
    };

    //4.设置小圆点的绑定
    function showCircle(){
        //将之前的小圆点样式清除
        for(var i = 0 ;i<buttons.length;i++){
            //为了减少不必要的循环
            if (buttons[i].className == "on") {
                buttons[i].className = "";
                break;
            }
        }
        buttons[index].className = "on";
    }

    //使用自执行函数解决当前的i的赋值问题
    for(var i = 0 ;i<buttons.length;i++){
        buttons[i].value  = i;
        (function(){
            buttons[i].onclick = function(){
                //判断当前的value值是否和index相等
                if(this.value == index) return;
                //如果不相等
                var offset = -520*(this.value - index);
                move(offset);
                index = this.value;
                showCircle();
            }
        })();
    }

    //5.设置自动轮播
    timer2 = setInterval(next.onclick,1500);
    container.onmouseover = function(){
        clearInterval(timer2);
    };
    container.onmouseout = function(){
        timer2 = setInterval(next.onclick,1500);
    };
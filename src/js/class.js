//公式：小图/大图=小放/大放
function Scale(){
    this.wrap=document.querySelector('.wrap');
    this.spic=document.querySelector('#spic');
    this.sf=document.querySelector('#sf');
    this.bpic=document.querySelector('#bpic');
    this.bf=document.querySelector('#bf');
    this.listul=document.querySelector('#list ul');
    this.listli=document.querySelectorAll('#list ul li');
    this.btnleft=document.querySelector('#left');
    this.btnright=document.querySelector('#right');
}

Scale.prototype.init=function(){
    //1.鼠标经过小图，小放和大放显示
    var _this=this;
    this.spic.onmouseover=function(){
        _this.mouseover();
        //2.求小放的宽高
        _this.boxsize();
        _this.spic.onmousemove=function(ev){
            var ev=ev||window.event;
            _this.mousemove(ev);
        }
    };
    this.spic.onmouseout=function(){
        _this.mouseout();
    }
    //3.求ul的宽度
    this.liwidth=this.listli[0].offsetWidth;//一个li的width
    this.listul.style.width=this.listli.length*this.liwidth+'px';
    //4.点击li切换图片
    for(var i=0;i<this.listli.length;i++){
        this.listli[i].onclick=function(){
            //求当前li内部图片的src
            var url=this.children[0].src;
            _this.spic.children[0].src=url;
            _this.bpic.src=url;
        }
    }
    //5.点击左右按钮进行切换。
    // this.showlistlength=6;//li显示的长度是6
    // if(this.listli.length<=this.showlistlength){
    //     this.btnright.style.color='#fff';
    // }
    // this.btnright.onclick=function(){
    //     _this.rightclick();
    // }
    
    // this.btnleft.onclick=function(){
    //     _this.leftclick();
    // }
    
};

Scale.prototype.mouseover=function(){
    this.sf.style.visibility='visible';
    this.bf.style.visibility='visible';
};
Scale.prototype.mouseout=function(){
    this.sf.style.visibility='hidden';
    this.bf.style.visibility='hidden';
};
Scale.prototype.boxsize=function(){
    this.sf.style.width=this.spic.offsetWidth*this.bf.offsetWidth/this.bpic.offsetWidth+'px';
    this.sf.style.height=this.spic.offsetHeight*this.bf.offsetHeight/this.bpic.offsetHeight+'px';
    this.bili=this.bpic.offsetWidth/this.spic.offsetWidth;
};
Scale.prototype.mousemove=function(ev){
    var l=ev.clientX-this.wrap.offsetLeft-this.sf.offsetWidth/2;
    var t=ev.clientY-this.wrap.offsetTop-this.sf.offsetHeight/2;
    if(l<0){
        l=0;
    }else if(l>=this.spic.offsetWidth-this.sf.offsetWidth){
        l=this.spic.offsetWidth-this.sf.offsetWidth-2;
    }
    
    if(t<0){
        t=0;
    }else if(t>=this.spic.offsetHeight-this.sf.offsetHeight){
        t=this.spic.offsetHeight-this.sf.offsetHeight-2;
    }
    this.sf.style.left=l+'px';
    this.sf.style.top=t+'px';
    
    this.bpic.style.left=-l*this.bili+'px';
    this.bpic.style.top=-t*this.bili+'px';
};

Scale.prototype.rightclick=function(){
    if(this.listli.length>this.showlistlength){//当前的li的长度>6，可以点击
        this.btnleft.style.color='#333';
        this.showlistlength++;
        if(this.showlistlength==this.listli.length){
            this.btnright.style.color='#fff';
        }
        bufferMove(this.listul,{left:-(this.showlistlength-6)*this.liwidth});
        //每次ul从新开始设置位置。
    }
};

Scale.prototype.leftclick=function(){
    if(this.showlistlength>6){//点击左侧的箭头，showlistlength>6
        this.btnright.style.color='#333';
        this.showlistlength--;
        if(this.showlistlength==6){
            this.btnleft.style.color='#fff';
        }
        bufferMove(this.listul,{left:-(this.showlistlength-6)*this.liwidth});
        //每次ul从新开始设置位置。
    }
}
new Scale().init();
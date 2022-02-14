var flag=true;
const upadd=document.querySelector('#upadd');
const downsub=document.querySelector('#downsub')
const numbercount=document.querySelector('#numbercount');
const tm_pay=document.querySelector('#tm-pay');
const hiddenbox1=document.querySelector('#hiddenbox1');
const i=document.querySelector('#tm-pay i');
var value=parseInt(numbercount.value);
console.log(value);
upadd.addEventListener('click',function(){
     value++;
     numbercount.value=value;
    //  if(value<1) return false;
})
downsub.addEventListener('click',function(){
    value--;
    if(value<1) value=1;
    numbercount.value=value;
})
tm_pay.addEventListener('click',function(){
    if(flag){
        hiddenbox1.style.display="block";
        i.setAttribute('class',"iconfont icon-xiangshangjiantou");
    }else{
        hiddenbox1.style.display="none";
        i.setAttribute('class',"iconfont icon-arrowdown")
    }
    flag=!flag;
})

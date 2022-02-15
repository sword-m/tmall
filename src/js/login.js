!function($){
    const as=$('.divpanel .paneltitle a');
    const contents=$('.divpanel .panelcontent .contenbox1');
    // console.log(contents);
    // console.log(as);
    const fm_f=$('.fm-field');
    const inputs=$('.fm-field input');
    as.on('click',function(){
        // console.log($(this).index('a'));
        $(this).addClass('active').siblings('a').removeClass('active');
        contents.eq($(this).index('.loginitem-password')).addClass('show').siblings('.contenbox1').removeClass('show');
    })
    inputs.on('mouseover',function(){
        $(this).parent().parent().addClass('active');
        inputs.on('mouseleave',function(){
            $(this).parent().parent().removeClass('active');
        })
    })
    inputs.on('focus',function(){
        $(this).parent().parent().addClass('active');  
        inputs.on('blur',function(){
            $(this).parent().parent().removeClass('active');
        })
    })
}(jQuery);
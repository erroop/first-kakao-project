$(function(){
    const content = $(".slide_content")
    const container = $(".green_slide_container")
    const btn = $('.green_slide_btn')
    let count = 0;
    btn.find(".right").click(function(){
        if(count === 0){
            container.animate({left : -(content.innerWidth() + 24)}, 300 , "linear")
            count ++;
        }
    })
    btn.find(".left").click(function(){
        if(count === 1){
            container.animate({left : (content.innerWidth() + 24)*0}, 300 , "linear")
            count --;
        }
    })
})
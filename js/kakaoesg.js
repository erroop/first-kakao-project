$(function(){
    const btn_layout = $(".esg_slide_layout")
    const slide = $(".esg_slide_container")
    const btn_container = $(".esg_slide_btn")
    const width = btn_layout.innerWidth()
    let count = 0
    btn_container.find(".right").click(function(){
        if(count === 0){
            slide.animate({right : width + 36}, 300, "linear")
            count ++;
        }
        else if(count === 1){
            slide.animate({right : (width + 36)*2}, 300, "linear")
            count ++;
        }
    })
    btn_container.find(".left").click(function(){
        if(count === 2){
            slide.animate({right : width + 36}, 300, "linear")
            count --;
        }
        else if(count === 1){
            slide.animate({right : (width + 36)*0}, 300, "linear")
            count --;
        }
    })
})
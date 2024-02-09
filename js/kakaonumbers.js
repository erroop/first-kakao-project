$(function(){
    const top_btn = $(".culture_top");
    top_btn.click(function(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
    const list = $(".kakao_numbers_list ul li")
    const list_btn_color = (first, second, third) => {
        list.removeClass("on")
        list.removeClass("out")
        list.eq(0).addClass(first)
        list.eq(1).addClass(second)
        list.eq(2).addClass(third)
    }

    list.eq(0).click(function(){
        list_btn_color("on", "out", "out")
    })
    list.eq(1).click(function(){
        list_btn_color("out", "on", "out")
    })
    list.eq(2).click(function(){
        list_btn_color("out", "out", "on")
    })
})
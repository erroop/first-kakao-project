$(function(){
    const top_btn = $(".culture_top");
    top_btn.click(function(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })

    const list = $(".kakao_tech_list ul li")
    const list_btn_color = (first, second, third, four ,five, six, seven) => {
        list.removeClass("on")
        list.removeClass("out")
        list.eq(0).addClass(first)
        list.eq(1).addClass(second)
        list.eq(2).addClass(third)
        list.eq(3).addClass(four)
        list.eq(4).addClass(five)
        list.eq(5).addClass(six)
        list.eq(6).addClass(seven)
    }
    list.eq(0).click(function(){
        list_btn_color("on", "out", "out", "out", "out", "out" , "out")
    })
    list.eq(1).click(function(){
        list_btn_color("out", "on", "out", "out", "out", "out ", "out")
    })
    list.eq(2).click(function(){
        list_btn_color("out", "out", "on", "out", "out", "out" , "out")
    })
    list.eq(3).click(function(){
        list_btn_color("out", "out", "out", "on", "out", "out" , "out")
    })
    list.eq(4).click(function(){
        list_btn_color("out", "out", "out", "out", "on", "out" , "out")
    })
    list.eq(5).click(function(){
        list_btn_color("out", "out", "out", "out", "out", "on" , "out")
    })
    list.eq(6).click(function(){
        list_btn_color("out", "out", "out", "out", "out", "out" , "on")
    })
})
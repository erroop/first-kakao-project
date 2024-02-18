$(function(){
    if($(window).width() > 1025){
        // 전구 모양 글시 fade in / out
        $(".img_text_fade_inout").find("img").mouseover(function(){
            $(".img_text_fade_inout").find("span").fadeIn();
        }).mouseleave(function(){
            $(".img_text_fade_inout").find("span").fadeOut();
        })   
    }
    // 메뉴 마우스 오버 컬러변경
    // 메뉴리스트 클릭스 hide컨텐츠 보여주기
    const inner_list_layout = $(".inner_list_layout div");

    const menu_list = $(".menu_list li");

    const menu_list_focus_add = (first, second, third ,four) => {
        menu_list.eq(first).addClass("focus")
        menu_list.eq(second).addClass("focus")
        menu_list.eq(third).addClass("focus")
        menu_list.eq(four).addClass("focus")
    }
    const menu_list_focus_remove = (first, second, third ,four) => {
        menu_list.eq(first).removeClass("focus")
        menu_list.eq(second).removeClass("focus")
        menu_list.eq(third).removeClass("focus")
        menu_list.eq(four).removeClass("focus")
    }
    menu_list.eq(0).mouseover(function(){
        menu_list_focus_add(1, 2, 3, 4)
    }).mouseleave(function(){
        menu_list_focus_remove(1, 2, 3, 4)
    }).click(function(){
        if(inner_list_layout.eq(0).hasClass("inner_list_one_fadeout")){
            inner_list_layout.eq(0).removeClass("inner_list_one_fadeout")
            inner_list_layout.eq(0).addClass("inner_list_one")
        }
        else{
            inner_list_layout.eq(0).removeClass("inner_list_one")
            inner_list_layout.eq(0).addClass("inner_list_one_fadeout")
        }
        if(!inner_list_layout.eq(1).hasClass("inner_list_two_fadeout")){
            inner_list_layout.eq(1).removeClass("inner_list_two")
            inner_list_layout.eq(1).addClass("inner_list_two_fadeout")
        }
        if(!inner_list_layout.eq(2).hasClass("inner_list_three_fadeout")){
            inner_list_layout.eq(2).removeClass("inner_list_three")
            inner_list_layout.eq(2).addClass("inner_list_three_fadeout")
        }
        if(!inner_list_layout.eq(3).hasClass("inner_list_four_fadeout")){
            inner_list_layout.eq(3).removeClass("inner_list_four")
            inner_list_layout.eq(3).addClass("inner_list_four_fadeout")
        }
        if(!inner_list_layout.eq(4).hasClass("inner_list_five_fadeout")){
            inner_list_layout.eq(4).removeClass("inner_list_five")
            inner_list_layout.eq(4).addClass("inner_list_five_fadeout")
        }
    })

    menu_list.eq(1).mouseover(function(){
        menu_list_focus_add(0, 2, 3, 4)
    }).mouseleave(function(){
        menu_list_focus_remove(0, 2, 3, 4)
    }).click(function(){
        if(inner_list_layout.eq(1).hasClass("inner_list_two_fadeout")){
            inner_list_layout.eq(1).removeClass("inner_list_two_fadeout")
            inner_list_layout.eq(1).addClass("inner_list_two")
        }
        else{
            inner_list_layout.eq(1).removeClass("inner_list_two")
            inner_list_layout.eq(1).addClass("inner_list_two_fadeout")
        }
        if(!inner_list_layout.eq(0).hasClass("inner_list_one_fadeout")){
            inner_list_layout.eq(0).removeClass("inner_list_one")
            inner_list_layout.eq(0).addClass("inner_list_one_fadeout")
        }
        if(!inner_list_layout.eq(2).hasClass("inner_list_three_fadeout")){
            inner_list_layout.eq(2).removeClass("inner_list_three")
            inner_list_layout.eq(2).addClass("inner_list_three_fadeout")
        }
        if(!inner_list_layout.eq(3).hasClass("inner_list_four_fadeout")){
            inner_list_layout.eq(3).removeClass("inner_list_four")
            inner_list_layout.eq(3).addClass("inner_list_four_fadeout")
        }
        if(!inner_list_layout.eq(4).hasClass("inner_list_five_fadeout")){
            inner_list_layout.eq(4).removeClass("inner_list_five")
            inner_list_layout.eq(4).addClass("inner_list_five_fadeout")
        }
    })

    menu_list.eq(2).mouseover(function(){
        menu_list_focus_add(0, 1, 3, 4)
    }).mouseleave(function(){
        menu_list_focus_remove(0, 1, 3, 4)
    }).click(function(){
        if(inner_list_layout.eq(2).hasClass("inner_list_three_fadeout")){
            inner_list_layout.eq(2).removeClass("inner_list_three_fadeout")
            inner_list_layout.eq(2).addClass("inner_list_three")
        }
        else{
            inner_list_layout.eq(2).removeClass("inner_list_three")
            inner_list_layout.eq(2).addClass("inner_list_three_fadeout")
        }
        if(!inner_list_layout.eq(0).hasClass("inner_list_one_fadeout")){
            inner_list_layout.eq(0).removeClass("inner_list_one")
            inner_list_layout.eq(0).addClass("inner_list_one_fadeout")
        }
        if(!inner_list_layout.eq(1).hasClass("inner_list_two_fadeout")){
            inner_list_layout.eq(1).removeClass("inner_list_two")
            inner_list_layout.eq(1).addClass("inner_list_two_fadeout")
        }
        if(!inner_list_layout.eq(3).hasClass("inner_list_four_fadeout")){
            inner_list_layout.eq(3).removeClass("inner_list_four")
            inner_list_layout.eq(3).addClass("inner_list_four_fadeout")
        }
        if(!inner_list_layout.eq(4).hasClass("inner_list_five_fadeout")){
            inner_list_layout.eq(4).removeClass("inner_list_five")
            inner_list_layout.eq(4).addClass("inner_list_five_fadeout")
        }
    })

    menu_list.eq(3).mouseover(function(){
        menu_list_focus_add(0, 1, 2, 4)
    }).mouseleave(function(){
        menu_list_focus_remove(0, 1, 2, 4)
    }).click(function(){
        if(inner_list_layout.eq(3).hasClass("inner_list_four_fadeout")){
            inner_list_layout.eq(3).removeClass("inner_list_four_fadeout")
            inner_list_layout.eq(3).addClass("inner_list_four")
        }
        else{
            inner_list_layout.eq(3).removeClass("inner_list_four")
            inner_list_layout.eq(3).addClass("inner_list_four_fadeout")
        }
         if(!inner_list_layout.eq(0).hasClass("inner_list_one_fadeout")){
            inner_list_layout.eq(0).removeClass("inner_list_one")
            inner_list_layout.eq(0).addClass("inner_list_one_fadeout")
        }
        if(!inner_list_layout.eq(1).hasClass("inner_list_two_fadeout")){
            inner_list_layout.eq(1).removeClass("inner_list_two")
            inner_list_layout.eq(1).addClass("inner_list_two_fadeout")
        }
        if(!inner_list_layout.eq(2).hasClass("inner_list_three_fadeout")){
            inner_list_layout.eq(2).removeClass("inner_list_three")
            inner_list_layout.eq(2).addClass("inner_list_three_fadeout")
        }
        if(!inner_list_layout.eq(4).hasClass("inner_list_five_fadeout")){
            inner_list_layout.eq(4).removeClass("inner_list_five")
            inner_list_layout.eq(4).addClass("inner_list_five_fadeout")
        }
    })

    menu_list.eq(4).mouseover(function(){
        menu_list_focus_add(0, 1, 2, 3)
    }).mouseleave(function(){
        menu_list_focus_remove(0, 1, 2, 3)
    }).click(function(){
        if(inner_list_layout.eq(4).hasClass("inner_list_five_fadeout")){
            inner_list_layout.eq(4).removeClass("inner_list_five_fadeout")
            inner_list_layout.eq(4).addClass("inner_list_five")
        }
        else{
            inner_list_layout.eq(4).removeClass("inner_list_five")
            inner_list_layout.eq(4).addClass("inner_list_five_fadeout")
        }
        if(!inner_list_layout.eq(0).hasClass("inner_list_one_fadeout")){
            inner_list_layout.eq(0).removeClass("inner_list_one")
            inner_list_layout.eq(0).addClass("inner_list_one_fadeout")
        }
        if(!inner_list_layout.eq(1).hasClass("inner_list_two_fadeout")){
            inner_list_layout.eq(1).removeClass("inner_list_two")
            inner_list_layout.eq(1).addClass("inner_list_two_fadeout")
        }
        if(!inner_list_layout.eq(2).hasClass("inner_list_three_fadeout")){
            inner_list_layout.eq(2).removeClass("inner_list_three")
            inner_list_layout.eq(2).addClass("inner_list_three_fadeout")
        }
        if(!inner_list_layout.eq(3).hasClass("inner_list_four_fadeout")){
            inner_list_layout.eq(3).removeClass("inner_list_four")
            inner_list_layout.eq(3).addClass("inner_list_four_fadeout")
        }
    })

    // 사이드 컨텐츠 (count up , 카카오 임팩트) , (금융안전, 다양성의 가치) indicator 생성
    let innerhtml = ""
    const indicator = $(".side_content_one_layout").find(".indicator")
    const indicator_second = $(".side_content_two_layout").find(".indicator")
    $(".side_content_one_container div").each(function(){
        innerhtml += "<button></button>"
        indicator.html(innerhtml);
        indicator_second.html(innerhtml)
    })

    // 사이드 컨텐츠 (count up , 카카오 임팩트) indicator button 클릭이벤트
    indicator.find("button").eq(0).click(function(){
        slide_container.eq(0).fadeIn();
        slide_container.eq(1).fadeOut();
        slide_container_one_indicator.eq(0).addClass("focus");
        slide_container_one_indicator.eq(1).removeClass("focus");
    })

    indicator.find("button").eq(1).click(function(){
        slide_container.eq(0).fadeOut();
        slide_container.eq(1).fadeIn();
        slide_container_one_indicator.eq(1).addClass("focus");
        slide_container_one_indicator.eq(0).removeClass("focus");
    })
    
    indicator_second.find("button").eq(0).click(function(){
        second_slide_container.eq(0).fadeIn();
        second_slide_container.eq(1).fadeOut();
        slide_container_two_indicator.eq(0).addClass("focus");
        slide_container_two_indicator.eq(1).removeClass("focus");
    })

    indicator_second.find("button").eq(1).click(function(){
        second_slide_container.eq(0).fadeOut();
        second_slide_container.eq(1).fadeIn();
        slide_container_two_indicator.eq(1).addClass("focus");
        slide_container_two_indicator.eq(0).removeClass("focus");
    })
    // 사이드 컨텐츠 (count up , 카카오 임팩트) fade in / out
    let current_index = 0;
    const slide_container = $(".side_content_one_container div");
    const second_slide_container = $(".side_content_two_container div")
    const slide_container_length = slide_container.length
    const slide_container_one_indicator = $(".side_content_one_layout .indicator button");
    const slide_container_two_indicator = $(".side_content_two_layout .indicator button")
    const side_content_one_slide = () => {
        //first content fade in / out
        let next_index = (current_index + 1) % slide_container_length;
        slide_container.eq(current_index).fadeOut();
        slide_container.eq(next_index).fadeIn();

        //second content fade in / out
        second_slide_container.eq(current_index).fadeOut();
        second_slide_container.eq(next_index).fadeIn();

        //first indicator
        slide_container_one_indicator.removeClass("focus");
        slide_container_one_indicator.eq(current_index).removeClass("focus");
        slide_container_one_indicator.eq(next_index).addClass("focus");

        //second indicator
        slide_container_two_indicator.removeClass("focus");
        slide_container_two_indicator.eq(current_index).removeClass("focus");
        slide_container_two_indicator.eq(next_index).addClass("focus");
        current_index = next_index;
    }
    setInterval(side_content_one_slide, 5000)

    // 사이드 컨텐츠 (count up)
    // 함수로 만드는 법 좀 연구해봐야겠음...
    let cnt0 = 0;
    let cnt1 = 0;
    let cnt2 = 0;
    let cnt3 = 0;
    let cnt4 = 0;
    let cnt5 = 0;
    let cnt6 = 0;
    let cnt7 = 0;
    const count0 = () => {
        cnt0 ++;
        if(cnt0 > 9){
            $(".count_up_container").find("p").eq(0).text(5);
        } else {
            $(".count_up_container").find("p").eq(0).text(cnt0);
        }
    }
    const count1 = () => {
        cnt1 ++;
        if(cnt1 > 9){
            $(".count_up_container").find("p").eq(1).text(7);
        } else {
            $(".count_up_container").find("p").eq(1).text(cnt1);
        }
    }
    const count2 = () => {
        cnt2 ++;
        if(cnt2 > 9){
            $(".count_up_container").find("p").eq(3).text(4);
        } else {
            $(".count_up_container").find("p").eq(3).text(cnt2);
        }
    }
    const count3 = () => {
        cnt3 ++;
        if(cnt3 > 9){
            $(".count_up_container").find("p").eq(4).text(1);
        } else {
            $(".count_up_container").find("p").eq(4).text(cnt3);
        }
    }
    const count4 = () => {
        cnt4 ++;
        if(cnt4 > 9){
            $(".count_up_container").find("p").eq(5).text(2);
        } else {
            $(".count_up_container").find("p").eq(5).text(cnt4);
        }
    }
    const count5 = () => {
        cnt5 ++;
        if(cnt5 > 9){
            $(".count_up_container").find("p").eq(7).text(8);
        } else {
            $(".count_up_container").find("p").eq(7).text(cnt5);
        }
    }
    const count6 = () => {
        cnt6 ++;
        if(cnt6 > 9){
            $(".count_up_container").find("p").eq(8).text(7);
        } else {
            $(".count_up_container").find("p").eq(8).text(cnt6);
        }
    }
    const count7 = () => {
        cnt7 ++;
        if(cnt7 > 9){
            $(".count_up_container").find("p").eq(9).text(2);
        } else {
            $(".count_up_container").find("p").eq(9).text(cnt7);
        }
    }
    const count_up1 = () => {setInterval(count1 , 100)} 
    const count_up2 = () => {setInterval(count2 , 100)} 
    const count_up3 = () => {setInterval(count3 , 100)} 
    const count_up4 = () => {setInterval(count4 , 100)} 
    const count_up5 = () => {setInterval(count5 , 100)} 
    const count_up6 = () => {setInterval(count6 , 100)} 
    const count_up7 = () => {setInterval(count7 , 100)} 
    setInterval(count0 , 100)
    setTimeout(count_up1, 100)
    setTimeout(count_up2, 200)
    setTimeout(count_up3, 300)
    setTimeout(count_up4, 400)
    setTimeout(count_up5, 500)
    setTimeout(count_up6, 600)
    setTimeout(count_up7, 700)

    // 사이드 컨텐츠 (문화 , 공동체 ,연혁) fade in / out
    const slide_container_three = $(".side_content_three_container div");
    const arrow_left = $(".arrow_left");
    const arrow_right = $(".arrow_right");
    const slide_container_three_length = slide_container_three.length
    let new_current_index = 0;
     //third content fade in / out
    const third_slide = () => {
        let new_next_index = (new_current_index + 1) % slide_container_three.length;
        slide_container_three.eq(new_current_index).fadeOut();
        slide_container_three.eq(new_next_index).fadeIn();
        new_current_index = new_next_index;
    }
    setInterval(third_slide, 5000)

    arrow_left.click(function(){
        if(slide_container_three.eq(0).css("display") === "block"){
            slide_container_three.eq(0).fadeOut();
            slide_container_three.eq(1).fadeOut();
            slide_container_three.eq(2).fadeIn();
        } else if(slide_container_three.eq(1).css("display") === "block"){
            slide_container_three.eq(0).fadeIn();
            slide_container_three.eq(1).fadeOut();
            slide_container_three.eq(2).fadeOut();
        } else if(slide_container_three.eq(2).css("display") === "block"){
            slide_container_three.eq(0).fadeOut();
            slide_container_three.eq(1).fadeIn();
            slide_container_three.eq(2).fadeOut();
        }
    })

    arrow_right.click(function(){
        if(slide_container_three.eq(0).css("display") === "block"){
            slide_container_three.eq(0).fadeOut();
            slide_container_three.eq(1).fadeIn();
            slide_container_three.eq(2).fadeOut();
        } else if(slide_container_three.eq(1).css("display") === "block"){
            slide_container_three.eq(0).fadeOut();
            slide_container_three.eq(1).fadeOut();
            slide_container_three.eq(2).fadeIn();
        } else if(slide_container_three.eq(2).css("display") === "block"){
            slide_container_three.eq(0).fadeIn();
            slide_container_three.eq(1).fadeOut();
            slide_container_three.eq(2).fadeOut();
        }

    })

    // 무한 슬라이드 배너
    const slide_loop = $(".slide_layout");
    const slide = $(".slide_container");
    const slide_clone = slide.clone();
    slide_clone.removeClass("slide_container");
    slide_clone.addClass("slide_container_clone")
    slide_loop.append(slide_clone);


    if($(window).width() <= 1024) {
        // 태블릿 모드 hide menu open / hide
        const hide_content_open = $(".min_media_icon");
        hide_content_open.click(function(){
            $(".logo").css({display : "none"})
            $(".menu_list").css({display : "none"})
            $(".util_list").css({display : "none"})
            $(".mobile_hide_content").css({display : "flex"}).animate({right: "0px"})
            $("main").css({display : "none"})
            $("footer").css({display : "none"})
        })

        const hide_content_hide = $(".mobile_hide_content").find("span").find("i")
        hide_content_hide.click(function(){
            $(".logo").css({display : "flex"})
            $(".menu_list").css({display : "flex"})
            $(".util_list").css({display : "flex"})
            $(".mobile_hide_content").css({display : "flex"}).animate({right: "-1025px"})
            $("main").css({display : "block"})
            $("footer").css({display : "block"})
        })

        // news content slide btn
        const slide_content = $(".kakao_news_layout .kakao_container_one");
        const news_slide_btn = $(".mobile_nesw_btn button");
        let news_slide_count = 0;
        news_slide_btn.eq(0).css({opacity : "0.6"})
        news_slide_btn.eq(1).click(function(){
            news_slide_btn.eq(0).css({opacity : "1"})
            if(news_slide_count === 0){
                slide_content.eq(0).fadeOut();
                slide_content.eq(1).fadeIn();
                slide_content.eq(2).fadeOut();
                news_slide_count ++;
            }
            else if(news_slide_count === 1){
                news_slide_btn.eq(1).css({opacity : "0.6"})
                slide_content.eq(0).fadeOut();
                slide_content.eq(1).fadeOut();
                slide_content.eq(2).fadeIn();
                news_slide_count ++;
            }
        })

        news_slide_btn.eq(0).click(function(){
            if(news_slide_count === 2){
                news_slide_btn.eq(1).css({opacity : "1"})
                slide_content.eq(0).fadeOut();
                slide_content.eq(1).fadeIn();
                slide_content.eq(2).fadeOut();
                news_slide_count --;
            }
            else if(news_slide_count === 1){
                news_slide_btn.eq(0).css({opacity : "0.6"})
                slide_content.eq(0).fadeIn();
                slide_content.eq(1).fadeOut();
                slide_content.eq(2).fadeOut();
                news_slide_count --;
            }
        })
    }
        
})


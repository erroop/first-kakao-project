$(function(){
    const top_btn = $(".culture_top");
    top_btn.click(function(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
})
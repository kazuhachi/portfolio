

/**
 * styles the navigation when document is scrolled
 */
document.addEventListener("scroll", ()=> {
    let scrollAmount = window.scrollY;
    let navigationDiv = document.querySelector(".navigation");

    if (scrollAmount > 200){
        navigationDiv.classList.add("navagationToOpaque");
    }else{
        navigationDiv.classList.remove("navagationToOpaque")
    }
})




$(document).ready(() => {

    /**
     * scroll to section when <a> link is clicked 
     */
    $(".navigation a").on("click", function(){
        let target = $(this).attr("target-link");
        let links = $(".navigation").find("a");
        links.each(function(index, item){
            $(item).removeClass("selected")
        });

        $(this).addClass("selected");


        try{
            $([document.documentElement]).animate({
                scrollTop: $(`#${target}`).offset().top
            }, 500)
        }catch(err){
            console.log(`link not`)
        }
    })
    




})
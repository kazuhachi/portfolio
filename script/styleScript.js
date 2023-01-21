

/**
 * styles the navigation when document is scrolled
 */
document.addEventListener("scroll", ()=> {
    let scrollAmount = window.scrollY;
    let navigationDiv = document.querySelector(".navigation");

    if (scrollAmount > 0){
        navigationDiv.classList.add("navagationToOpaque");
    }else{
        navigationDiv.classList.remove("navagationToOpaque")
    }
})



let callback = (entries, oberver) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add("shown")
            // console.log(entry.target)
        }
    })
   
}


//  intersection oberver API
let oberver = new IntersectionObserver(callback, {
    root: document.querySelector('document'),
    rootMargin: '0px',
    threshold: 0.7
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

    let targets = document.querySelectorAll(".work-item-card");
    targets.forEach(item => {
        oberver.observe(item)
    })

})






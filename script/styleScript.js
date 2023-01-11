/**
 * styles the navigation when document is scrolled
 */


document.addEventListener("scroll", ()=> {
    console.log(window.scrollY)
    let scrollAmount = window.scrollY;
    let navigationDiv = document.querySelector(".navigation");

    if (scrollAmount > 200){
        console.log("ok")
        navigationDiv.classList.add("navagationToOpaque");
    }else{
        navigationDiv.classList.remove("navagationToOpaque")
    }
})
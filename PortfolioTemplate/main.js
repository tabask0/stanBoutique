// Menu icon

const selectElement = (s) =>document.querySelector(s);
const navLinks = document.querySelectorAll(".nav-link");

selectElement(".menu-icon").addEventListener("click", () => {
    selectElement(".nav-list").classList.toggle("active");
    selectElement(".menu-icon").classList.toggle("toggle");

    navLinks.forEach((link,index) => {
        if (link.style.animation){
            link.style.animation = ""
        }
        else{
            link.style.animation = `navLinkAnimate 0.5s ease forwards ${ index/7 + 0.5}s`

        }
    })
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        selectElement(".nav-list").classList.toggle("active");
        selectElement(".menu-icon").classList.toggle("toggle");
        navLinks.forEach((link,index) => {
            if (link.style.animation){
                link.style.animation = ""
            }
            else{
                link.style.animation = `navLinkAnimate 0.5s ease forwards ${ index/7 + 0.5}s`
    
            }
        })
    })
});

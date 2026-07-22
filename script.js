// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// Mobile menu toggle (przygotowane pod wersję mobilną)
const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if(menuButton){

    menuButton.addEventListener("click", ()=>{

        menu.classList.toggle("open");

    });

}

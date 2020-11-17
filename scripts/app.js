window.onscroll = () => {myFunction();}

function myFunction(){
    let element = document.getElementById("Nav");
    let links = document.querySelectorAll(".nav-link");

    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
    {
        element.classList.add("navbar-scroll");

        for (let index = 0; index < links.length; index++) 
            links[index].classList.add("nav-link-scroll");
    }
    else
    {
        element.classList.remove("navbar-scroll");

        for (let index = 0; index < links.length; index++) 
            links[index].classList.remove("nav-link-scroll");
    }
}
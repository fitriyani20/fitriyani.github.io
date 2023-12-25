    const menuTonggle = document.querySelector(".menu-toggle input");
    const nav = document.querySelector("nav ul");
    const navbarItems = document.querySelectorAll("nav ul li a");

    menuTonggle.addEventListener("click", function () {
    nav.classList.toggle("slide");
    });

     
const header = Document.querySelector("header");

Window.addEventListener ("scroll", function (){
    header.classList.toggle ("sticky", window.scrollY > 0); 
})
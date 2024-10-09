var nordic = document.querySelector("#nordic");
var heading = document.querySelector("h1");

heading.addEventListener("mouseenter", (event) => {
    nordic.style.opacity = 1;
});

heading.addEventListener("mouseleave", (event) => {
    nordic.style.opacity = 0;  
}); 
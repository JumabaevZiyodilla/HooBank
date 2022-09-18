var elSiteHeaderToggleBtn = document.querySelector(".header-btn");
var elHeader = document.querySelector(".site-header");

elSiteHeaderToggleBtn.addEventListener("click", function(){
    elHeader.classList.toggle("site-header--open");
})
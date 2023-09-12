/*----------------*/
/*---- navbar ----*/
/*----------------*/
const navBar = document.querySelector("nav"),
       menuBtns = document.querySelectorAll(".menu-icon"),
       overlay = document.querySelector(".overlay");

     menuBtns.forEach((menuBtn) => {
       menuBtn.addEventListener("click", () => {
         navBar.classList.toggle("open");
       });
     });

     overlay.addEventListener("click", () => {
       navBar.classList.remove("open");
     });

/*----------------*/
/*---- header ----*/
/*----------------*/
function scrollBanner() {
  var scrollPos;
  var headerText = document.querySelector('.header-paralax h1');
  scrollPos = window.scrollY;

  if (scrollPos <= 600) {
    headerText.style.transform = "translateY(" + (-scrollPos / 3) + "px" + ")";
    headerText.style.opacity = 1 - (scrollPos / 600);
  }
}
window.addEventListener('scroll', scrollBanner);

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
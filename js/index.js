//////MY CODE

// let threeLines = document.querySelector(".burger-resp");
// let showChanges = document.querySelectorAll(".showHide-resp");
// let increaseHeight = document.querySelector(".h-nav-resp");

// threeLines.addEventListener("click", () => {
//   for (let data of showChanges) {
//     if (data.style.opacity == "100") {
//       data.style = "opacity:0";
//       increaseHeight.style = "height:72px";
//     } else {
//       data.style = "opacity:100";
//       increaseHeight.style = "height:270px";
//     }
//   }
// });

////// CODER CODE
let threeLines = document.querySelector(".burger-resp");
let navList = document.querySelector(".navlist");
let search = document.querySelector(".search");
let navbar = document.querySelector(".navbar");

threeLines.addEventListener("click", () => {
  navList.classList.toggle("showHide-resp");
  search.classList.toggle("showHide-resp");
  navbar.classList.toggle("h-nav-resp");
});

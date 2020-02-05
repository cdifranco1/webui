let menuIcon = document.querySelector(".menu-icon");
console.log(menuIcon)
let dropdown = document.querySelector(".dropdown");
console.log(dropdown)
menuIcon.addEventListener("click", toggleDisplay)

function toggleDisplay(){
  if (dropdown.style.display == "" || dropdown.style.display == 'none'){
    dropdown.style.display = 'flex';
  } else {
    dropdown.style.display = 'none'
  }
};

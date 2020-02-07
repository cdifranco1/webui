
window.onload = function(){
  let menuIcon = document.querySelector(".menu-icon");
  let dropdown = document.querySelector(".dropdown");
  let mainNav = document.querySelector(".main-nav");
  menuIcon.addEventListener("click", toggleDisplay);
  

  function toggleDisplay(){
    if (dropdown.style.display == "" || dropdown.style.display == 'none'){
      dropdown.style.display = 'flex';
    } else {
      dropdown.style.display = 'none';
    }
  };

  const removeDropdown = function(e){
    width = e.target.outerWidth;
    if (width > 500){
      dropdown.style.display = 'none';
    }
  };

  window.addEventListener("resize", removeDropdown);
};
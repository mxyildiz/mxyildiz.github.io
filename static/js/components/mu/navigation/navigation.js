/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function togglePrimaryMenu() {
  var element = document.getElementById("ghn");
  var button = document.getElementById("js-target-main-alpha");
  if (element != null && button != null){
    element.classList.toggle("visible");
    button.classList.toggle("expanded");
  }
  closeSecondaryMenu()
}

function closePrimaryMenu() {
  var element = document.getElementById("ghn");
  var button = document.getElementById("js-target-main-alpha");
  if (element != null && button != null){
    element.classList.remove("visible");
    button.classList.remove("expanded");
  }

}

function toggleSecondaryMenu() {
  var element = document.getElementById("menu-secondary-navigation");
  var button = document.getElementById("menu--secondary-toggle_button");
  if (element != null && button != null){
    element.classList.toggle("visible");
    button.classList.toggle("expanded");
  }
  closePrimaryMenu()

}

function closeSecondaryMenu() {
  var element = document.getElementById("menu-secondary-navigation");
  var button = document.getElementById("menu--secondary-toggle_button");
  if (element != null && button != null){
    element.classList.remove("visible");
    button.classList.remove("expanded");
  }
}

function closeAllMenus() {
  closePrimaryMenu();
  closeSecondaryMenu();
}

document.onload=function(){
  closeAllMenus();
}


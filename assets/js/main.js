/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function togglePrimaryMenu() {
  var element = document.getElementById("bh-navigation");
  var button = document.getElementById("bh-bar-hamicon");
  element.classList.toggle("visible");
  button.classList.toggle("expanded");
}

function closePrimaryMenu() {
  var element = document.getElementById("bh-navigation");
  var button = document.getElementById("bh-bar-hamicon");
  element.classList.remove("visible");
  button.classList.remove("expanded");
}

window.onload=function(){
  document.getElementById("b-body").addEventListener('click', closePrimaryMenu, false);
  document.body.style.visibility = "visible";
}
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function togglePrimaryMenu() {
  const element = document.getElementById("ghn");
  const button = document.getElementById("js-target-main-alpha");
  if (element != null && button != null) {
    element.classList.toggle("visible");
    button.classList.toggle("expanded");
  }
  closeSecondaryMenu();
}

function closePrimaryMenu() {
  const element = document.getElementById("ghn");
  const button = document.getElementById("js-target-main-alpha");
  if (element != null && button != null) {
    element.classList.remove("visible");
    button.classList.remove("expanded");
  }
}

function toggleSecondaryMenu() {
  const element = document.getElementById("menu-secondary-navigation");
  const button = document.getElementById("menu--secondary-toggle_button");
  if (element != null && button != null) {
    element.classList.toggle("visible");
    button.classList.toggle("expanded");
  }
  closePrimaryMenu();
}

function closeSecondaryMenu() {
  const element = document.getElementById("menu-secondary-navigation");
  const button = document.getElementById("menu--secondary-toggle_button");
  if (element != null && button != null) {
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

// closePrimaryMenu() is idempotent — safe to fire on every scroll
// event; `{ passive: true }` keeps scrolling smooth.
window.addEventListener("scroll", closePrimaryMenu, { passive: true });
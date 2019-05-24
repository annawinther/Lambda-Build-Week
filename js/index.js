
// MENU BAR DROP DOWN

const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
 menu.classList.toggle('menu--open');
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);


//ADD HOVER EFFECT OVER MENU ITEMS
const menuItem = document.querySelectorAll('li');

const grey = () => {
  event.target.style.color = "grey";
}

const black = () => {
  event.target.style.color = "black";
}

menuItem.forEach(item => item.addEventListener('mouseover', grey));
menuItem.forEach(item => item.addEventListener('mouseout', black));



// HOVER OVER DOWNLOAD button
const buttons = document.querySelectorAll('.btn1');

const color = () => {
  event.target.style.color =  "#fcc419";
  event.target.style.borderColor = " #fcc419";
}
const white = () => {
  event.target.style.color = "white";
  event.target.style.borderColor = "white";
}

buttons.forEach(button => button.addEventListener('mouseover', color ));
buttons.forEach(button => button.addEventListener('mouseout', white));



// DOWNLOAD APPSTORE BUTTON
const form = document.querySelectorAll('.popupForm');

const openForm = () => {
  alert("Coming Soon!");
}
buttons.forEach(button => button.addEventListener('click', openForm));



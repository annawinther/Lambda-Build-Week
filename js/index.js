// // MENU SHOWING WHEN CLICKED
// const toggleMenu = () => {
//    menu.classList.toggle('dropdown-content');
//  }

// // Start Here: Create a reference to the ".menu" class
// const menu = document.querySelector('.dropdown-content');

// const button = document.querySelector(".dropbtn");

// button.addEventListener('click', toggleMenu)
// // button.addEventListener('click', move)

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



// HOVER OVER LEARN MORE 
const buttons = document.querySelectorAll('.btn1');

buttons.forEach(button => button.addEventListener('mouseover', color ));
buttons.forEach(button => button.addEventListener('mouseout', white));

function color (event){
  event.target.style.color =  "#fcc419";
  event.target.style.borderColor = " #fcc419";
}

function white (event){
  event.target.style.color = "white";
  event.target.style.borderColor = "white";
}
// MENU SHOWING WHEN CLICKED
const toggleMenu = () => {
 // Toggle the "menu--open" class on your menu refence. 
   menu.classList.toggle('dropdown-content');
 }

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.dropdown-content');

const button = document.querySelector(".dropdown");

button.addEventListener('click', toggleMenu )


// HOVER OVER LEARN MORE 
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => button.addEventListener('mouseover', color ));
buttons.forEach(button => button.addEventListener('mouseout', white));

function color (event){
  event.target.style.color = " yellow";
  event.target.style.borderColor = "yellow";
}

function white (event){
  event.target.style = "color: white";
}
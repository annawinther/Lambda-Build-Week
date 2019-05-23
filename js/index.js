// MENU SHOWING WHEN CLICKED
const toggleMenu = () => {
   menu.classList.toggle('dropdown-content');
 }

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.dropdown-content');

const button = document.querySelector(".dropdown");

button.addEventListener('click', toggleMenu)
// button.addEventListener('click', move)



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
const toggleMenu = () => {
 // Toggle the "menu--open" class on your menu refence. 
   menu.classList.toggle('dropdown-content');
 }

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.dropdown-content');

const button = document.querySelector(".dropdown");

button.addEventListener('click', toggleMenu )



// Function to create and inject the menu into each page
function loadMenu() {
    const menu = `
      <ul class="nav-ul">
        <li><a href="../data/index.html">Home</a></li>
        <li><a href="../data/mycv.html">My CV</a></li>
        <li><a href="../data/projects.html">Projects</a></li>
        <li><a href="../data/tbd_one.html">Placeholder Page</a></li>
        <li><a href="../data/tbd_two.html">Placeholder Page 2</a></li>
      </ul>
    `;
    const navElement = document.getElementById("menu");
    navElement.innerHTML = menu;
    
    // Add the "active" class to the current page link
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll(".nav-ul li a");
    
    navLinks.forEach(link => {
      if (link.href.includes(currentPath)) {
        link.classList.add("active");
      }
    });
}

// Function to handle opening the project link
function openWebsite() {
  window.open("https://github.com/Taragoul/GuessANumber");
}

// Easter egg: Change background color when clicking on a specific spot
function triggerEasterEgg() {
  document.body.style.backgroundColor = 'purple';
}

// Easter egg: Show popup when typing "nomnom"
let easterEggSequence = '';
function checkEasterEggSequence(event) {
  easterEggSequence += event.key.toLowerCase();
  if (easterEggSequence.includes('nomnom')) {
    alert("Smart one aren't you?");
    easterEggSequence = ''; // Reset the sequence after triggering the Easter egg
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadMenu();

  const easterEggSpot = document.createElement('div');
  easterEggSpot.style.position = 'fixed';
  easterEggSpot.style.top = '50%';
  easterEggSpot.style.left = '50%';
  easterEggSpot.style.transform = 'translate(-50%, -50%)';
  easterEggSpot.style.width = '50px';
  easterEggSpot.style.height = '50px';
  easterEggSpot.style.cursor = 'pointer';
  easterEggSpot.style.zIndex = '1000';
  document.body.appendChild(easterEggSpot);

  easterEggSpot.addEventListener('click', triggerEasterEgg);
  document.addEventListener('keydown', checkEasterEggSequence);
});

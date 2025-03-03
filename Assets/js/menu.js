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
  
  // Call the loadMenu function to inject the menu when the page is loaded
  document.addEventListener("DOMContentLoaded", loadMenu);
  
  // If you're using modals or other interactive elements, add those event listeners here as well

async function loadCV() {
  try {
    const response = await fetch('../data/cv.json');
    const cvData = await response.json();
    
    const schoolWorkDiv = document.getElementById('School-Work');
    let content = '';

    cvData.forEach(item => {
      content += `
        <h2>${item.name}</h2>
        <p>${item.time}</p>
        <p>${item.description}</p>
      `;
    });

    schoolWorkDiv.innerHTML = content;
  } catch (error) {
    console.error('Error fetching CV data:', error);
  }
}
document.addEventListener('DOMContentLoaded', loadCV);

// Function to handle opening the project links
function openGuessANumber() {
    window.open("https://github.com/Taragoul/GuessANumber");
  }
  function openSQLproject() {
    window.open("https://github.com/Taragoul/SQLProject");
  }
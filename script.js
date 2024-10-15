// Interactivity for Current Year in Footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Hover effect for company links
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#333'; // Changes color on hover
        link.style.backgroundColor = '#FFCC00'; // Adds background highlight
    });
    link.addEventListener('mouseout', () => {
        link.style.color = '#FFCC00'; // Reverts back
        link.style.backgroundColor = 'transparent'; // Clears background
    });
});

console.log("Fitsum Berhane Haile Resume Loaded Successfully");
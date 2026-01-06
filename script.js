console.log("Codespaces is running!");

// Update the content
document.getElementById('app').innerHTML = 
    '<p>JavaScript is working in Codespaces!</p>';

// Add some interactivity
document.querySelector('h1').addEventListener('click', function() {
    this.style.color = this.style.color === 'red' ? '#333' : 'red';
});

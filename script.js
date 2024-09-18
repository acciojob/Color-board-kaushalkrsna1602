//your JS code here. If required.
const container = document.getElementById('board');
const squares = 800; // 800 boxes

// Function to generate a random color
function getRandomColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#F1C40F', '#9B59B6', '#1ABC9C', '#E74C3C'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Create 800 boxes dynamically
for (let i = 0; i < squares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    // Add hover effect with random color
    square.addEventListener('mouseover', () => {
        const color = getRandomColor();
        square.style.backgroundColor = color;

        // Remove color after 1 second
        setTimeout(() => {
            square.style.backgroundColor = '#333';
        }, 1000); // 1 second delay
    });

    container.appendChild(square);
}

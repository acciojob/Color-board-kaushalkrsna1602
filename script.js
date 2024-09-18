// Select the container element
const container = document.querySelector('.container');

// Function to create the grid of squares
function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        // Add hover effect with JavaScript
        square.addEventListener('mouseover', () => {
            square.classList.add('hovered');
        });

        square.addEventListener('mouseout', () => {
            setTimeout(() => {
                square.classList.remove('hovered');
            }, 1000);  // The color will revert back after 1 second
        });

        container.appendChild(square);
    }
}

// Create a grid of 800 squares
createGrid(800);

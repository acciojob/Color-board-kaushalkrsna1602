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

() => {
    cy.visit(baseUrl + "/main.html");

    // Ensure the container and squares exist
    cy.get(".container").should("exist");
    cy.get(".container").find(".square").eq(799).should("exist");

    // Check initial background color of the first square
    cy.get(".square").first().should("have.css", "background-color", "rgb(29, 29, 29)");

    // Trigger mouseover and check background color change
    cy.get(".square").first().trigger("mouseover");
    cy.wait(1000); // Wait to ensure hover effect is applied
    cy.get(".square").first().should("not.have.css", "background-color", "rgb(29, 29, 29)");

    // Trigger mouseout and check background color returns to normal
    cy.get(".square").first().trigger("mouseout");
    cy.wait(1000); // Wait to ensure the hover effect is removed
    cy.get(".square").first().should("have.css", "background-color", "rgb(29, 29, 29)");

    // Additional test cases for multiple squares
    cy.get(".square").eq(100).trigger("mouseover");
    cy.get(".square").eq(101).trigger("mouseover");
    cy.wait(1000); // Wait to ensure hover effect is applied to both squares

    // Check if colors of the hovered squares have changed
    cy.get(".square").eq(100).should("not.have.css", "background-color", "rgb(29, 29, 29)");
    cy.get(".square").eq(101).should("not.have.css", "background-color", "rgb(29, 29, 29)");

    // Trigger mouseout and check if the colors return to normal
    cy.get(".square").eq(100).trigger("mouseout");
    cy.get(".square").eq(101).trigger("mouseout");
    cy.wait(1000); // Wait to ensure hover effect is removed
    cy.get(".square").eq(100).should("have.css", "background-color", "rgb(29, 29, 29)");
    cy.get(".square").eq(101).should("have.css", "background-color", "rgb(29, 29, 29)");
}


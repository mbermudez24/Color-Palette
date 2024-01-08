/**
 * File: script.js
 * Description: Dynamic generation of color boxes for the color palette webpage.
 */

// Array of color codes for the color palette
const colorCodes = [
    // ... array of color codes ...
];

// Reference to the body element
const colorContainer = document.body;

// Loop through each color code and generate color boxes dynamically
colorCodes.forEach((colorCode) => {
    // Create a new color box element
    const colorBox = document.createElement('div');
    colorBox.classList.add('color-box', colorCode.length === 7 ? 'dark-text' : 'light-text');
    colorBox.style.backgroundColor = colorCode;

    // Create a color code div element
    const colorCodeDiv = document.createElement('div');
    colorCodeDiv.classList.add('color-code');
    colorCodeDiv.textContent = colorCode;

    // Append the color code div to the color box
    colorBox.appendChild(colorCodeDiv);

    // Append the color box to the body
    colorContainer.appendChild(colorBox);
});

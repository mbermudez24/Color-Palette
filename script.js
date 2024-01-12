/**
 * File: script.js
 * Description: Dynamic generation of color boxes for the color palette webpage.
 */

// Array of color codes for the color palette
const colorCodes = [
    '#f5f9fa',
    '#e1e4e5',
    '#d9a336',
    '#23CCAC',
    '#36bed9',
    '#3695d9',
    '#3651d9',
    '#6c36d9',
    '#be36d9',
    '#d9365f',
    '#992626',
    '#A65329',
    '#B3862C',
    '#6FB32C',
    '#38B32B',
    '#16A585',
    '#2C9CB3',
    '#2C7BB3',
    '#2C43B3',
    '#592CB3',
    '#9C2CB3',
    '#B32C4E',
    '#f5f9fa',
    '#e1e4e5',
    '#4b4c4d',
    '#323333',
    '#66c4ff',
    '#5585ff',
    '#ac59ff',
    '#f266ff',
    '#ff73ad',
    '#ff5040',
    '#fe9040',
    '#ffcf40',
    '#b0ff40',
    '#5fff40',
    '#3ffccd',
    '#40dfff',
    '#40b0ff',
    '#3f6efc',
    '#8f40ff',
    '#ef40ff',
    '#ff407f',
    '#bf3030',
    '#cc6633',
    '#7efcd2',
    '#70efff',
    '#ff7866',
    '#fcb165',
    '#ff7866',
    '#fcb165',
    '#ffe359',
    '#ccff66',
    '#96ff73'
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
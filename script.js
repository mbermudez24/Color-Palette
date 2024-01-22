document.addEventListener('DOMContentLoaded', function () {
    const colors = [
        { name: 'Light Gray', shades: ['#F0F0F0', '#EAEAEA', '#D4D4D4', '#C8C9C8', '#B3B6B7'] },
        { name: 'Medium Gray', shades: ['#D5D8DC', '#BFC2C7', '#ACB5BD', '#9DA3A9', '#868E96'] },
        { name: 'Dark Gray', shades: ['#808B96', '#636E7B', '#475258', '#394047', '#2D3436'] },
        { name: 'Blue', shades: ['#3498DB', '#4DA6DB', '#2E86C1', '#1F618D', '#154360'] },
        { name: 'Dark Blue', shades: ['#2980B9', '#21618C', '#1F4788', '#154360', '#0D4F75'] },
        { name: 'Green', shades: ['#2ECC71', '#4CAF50', '#45B39D', '#36AB82', '#2E6F4D'] },
        { name: 'Dark Green', shades: ['#27AE60', '#219653', '#1D8251', '#186A3B', '#145A32'] },
        { name: 'Yellow', shades: ['#F1C40F', '#F5D76E', '#E6B566', '#D4AC0D', '#B7950B'] },
        { name: 'Dark Yellow', shades: ['#F39C12', '#F5AB35', '#E67E22', '#B9770E', '#9A7D0A'] },
        { name: 'Red', shades: ['#E74C3C', '#EC7063', '#CB4335', '#A93226', '#8E44AD'] },
        { name: 'Dark Red', shades: ['#E67E22', '#D35400', '#BA4A00', '#A04000', '#7D3C98'] },
    ];

    const paletteContainer = document.getElementById('paletteContainer');

    colors.forEach(colorGroup => {
        const column = document.createElement('div');
        column.classList.add('color-column');
        colorGroup.shades.forEach((color, index) => {
            const colorBox = document.createElement('div');
            colorBox.style.backgroundColor = color;
            colorBox.classList.add('color-box');

            const hexCode = document.createElement('div');
            hexCode.classList.add('hex-code');
            hexCode.textContent = color;
            colorBox.appendChild(hexCode);

            colorBox.addEventListener('click', () => copyToClipboard(color));

            column.appendChild(colorBox);
        });
        paletteContainer.appendChild(column);
    });

    function copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }
});

const button = document.getElementById('colorToggle');
    let isWhite = true; // Track the current color

    button.addEventListener('click', () => {
        document.body.style.backgroundColor = isWhite ? 'black' : 'white';
        isWhite = !isWhite; // Toggle the color
    });
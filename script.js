window.addEventListener('DOMContentLoaded', () => {
    const boxesContainer = document.querySelector('.container-menuu');
    const boxes = Array.from(document.querySelectorAll('.box-menus1 > div, .box-menus2 > div, .box-menus3 > div'));
    const maxBoxesPerRow = 4;

    let currentRow = document.createElement('div');
    currentRow.classList.add('box-menus1');

    boxes.forEach((box, index) => {
        if (index !== 0 && index % maxBoxesPerRow === 0) {
            boxesContainer.appendChild(currentRow);
            currentRow = document.createElement('div');
            const className = `box-menus${Math.ceil((index + 1) / maxBoxesPerRow)}`;
            currentRow.classList.add(className);
            if (className === 'box-menus3' || className.startsWith('box-menus')) {
                currentRow.style.justifyContent = 'flex-start';
            }
        }
        currentRow.appendChild(box);
    });

    boxesContainer.appendChild(currentRow);
});

document.addEventListener('DOMContentLoaded', function() {
    const menuImg = document.getElementById('menuimg');
    menuImg.addEventListener('click', function() {
        window.location.href = "/";
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuImg = document.getElementById('footer-img');
    menuImg.addEventListener('click', function() {
        window.location.href = "/";
    });
});



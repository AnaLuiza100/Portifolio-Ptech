//POP UP IMAGEM

document.addEventListener('DOMContentLoaded', function () {
    const openButtons = document.querySelectorAll('.open-popup');
    const popupOverlay = document.querySelector('.popup-overlay');
    const popupContent = document.querySelector('.popup-content');
    const popupImage = document.getElementById('popup-image');

    openButtons.forEach(function (button) {
        button.addEventListener('click', function () {
        const imagePath = this.getAttribute('data-image');
        popupImage.src = imagePath;
        popupOverlay.style.display = 'flex';
        });
    });

    popupOverlay.addEventListener('click', function (event) {
        if (event.target === popupOverlay) {
        popupOverlay.style.display = 'none';
        }
    });
    
    popupContent.addEventListener('click', function (event) {
        event.stopPropagation();
    });
    });


//Scroll
  AOS.init();

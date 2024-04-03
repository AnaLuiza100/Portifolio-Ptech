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

    //Caixa de texto Atividades

    function toggleAtividade(num) {
        var conteudoAtividade = document.getElementById('conteudo-' + num);
        var seta = conteudoAtividade.previousElementSibling.querySelector('span');
        
        if (conteudoAtividade.style.display === 'none') {
          conteudoAtividade.style.display = 'block';
          seta.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
        } else {
          conteudoAtividade.style.display = 'none';
          seta.innerHTML = '<i class="fa-solid fa-arrow-down"></i>';
        }
      }

//Scroll
  AOS.init();

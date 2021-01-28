const navToggle = document.querySelector('.nav-toggle'),
      menu = document.querySelector('.menu'),
      buttons = document.querySelectorAll('.nav-toggle-buttons'),
      plansItem = document.querySelectorAll('.plans-item'),
      screenWidth = window.outerWidth;

navToggle.addEventListener('click', (e) => {
    const target = e.target;

    target.classList.add('hide', 'fade');
    target.classList.remove('show');
    menu.classList.remove('hide');
    menu.classList.add('show');
    showElements(buttons);
});

buttons.forEach((item) => {
    item.addEventListener('click', (e) => {
    const target = e.target;

        hideElements(buttons);
        navToggle.classList.remove('hide', 'fade');
        menu.classList.remove('show');
        menu.classList.add('hide');
        navToggle.classList.add('show', 'fade');
    });
});

if (screenWidth <= 1100) {
    window.addEventListener('click', (e) => {
        if (e.target !== menu && e.target !== navToggle) {
            menu.classList.remove('show');
            menu.classList.add('hide');
            navToggle.classList.remove('hide', 'fade');
            navToggle.classList.add('show', 'fade');
        }
    });
}


function showElements(element) {
    element.forEach ((item) => {

        item.classList.remove('hide', 'fade');
        item.classList.add('show', 'fade');
    });
}

function hideElements(element) {
    element.forEach ((item) => {
        item.classList.add('hide', 'fade');
        item.classList.remove('show');
    });
}
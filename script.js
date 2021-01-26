const navToggle = document.querySelector('.nav-toggle'),
      buttons = document.querySelectorAll('.nav-toggle-buttons');

navToggle.addEventListener('click', (e) => {
    const target = e.target;

    target.classList.add('hide', 'fade');
    target.classList.remove('show');

    showNavToggleButtons();
});

buttons.addEventListener('click', (e) => {
    const target = e.target;
    console.log(target);
    hideNavToggleButtons();
});

function showNavToggleButtons() {
    buttons.forEach ((item) => {
        item.classList.remove('hide');
        item.classList.add('show', 'fade');
    });
}

function hideNavToggleButtons() {
    buttons.forEach ((item) => {
        item.classList.add('hide', 'fade');
        item.classList.remove('show');
    });
}
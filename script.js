const navToggle = document.querySelector('.nav-toggle'),
      buttons = document.querySelectorAll('.nav-toggle-buttons'),
      plansItem = document.querySelectorAll('.plans-item');

navToggle.addEventListener('click', (e) => {
    const target = e.target;

    target.classList.add('hide', 'fade');
    target.classList.remove('show');

    showElements(buttons);
});

buttons.forEach((item) => {
    item.addEventListener('click', (e) => {
    const target = e.target;

        hideElements(buttons);
        navToggle.classList.remove('hide', 'fade');
        navToggle.classList.add('show', 'fade');
    });
});


plansItem.forEach((item) => {
    item.addEventListener('mouseover', (e) => {
        const target = e.target;

        target.classList.add('fade');
    });
});

plansItem.forEach((item) => {
    item.addEventListener('mouseout', (e) => {
        const target = e.target;

        target.classList.remove('fade');
    });
});


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
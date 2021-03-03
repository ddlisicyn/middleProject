const navToggle = document.querySelector('.nav-toggle'),
      menu = document.querySelector('.menu'),
      wrapperMenu = document.querySelectorAll('.nav-toggle-buttons'),
      menuButtons = document.querySelectorAll('.nav-toggle-buttons p'),
      plansItem = document.querySelectorAll('.plans-item'),
      circleSlider = document.querySelectorAll('.circle-slider'),
      sliderImg = document.querySelectorAll('.slider-img'),
      navButtons = document.querySelectorAll('.nav button'),
      contactsButtons = document.querySelectorAll('.contacts-buttons p');

//Menu in mobile devices
navToggle.addEventListener('click', (e) => {
    const target = e.target;

    target.classList.add('hide', 'fade');
    target.classList.remove('show');
    menu.classList.remove('hide');
    menu.classList.add('show');
    showElements(wrapperMenu);
});

wrapperMenu.forEach((item) => {
    item.addEventListener('click', (e) => {

        hideElements(wrapperMenu);
        navToggle.classList.remove('hide', 'fade');
        menu.classList.remove('show');
        menu.classList.add('hide');
        navToggle.classList.add('show', 'fade');
    });
});

//Slider
circleSlider.forEach((item, i) => {
    item.addEventListener('click', (e) => {
        circleSlider.forEach((item, j) => {

            if (j === i) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }

        });
    });
});

circleSlider.forEach((item, i) => {
    item.addEventListener('click', (e) => {

        sliderImg.forEach((item, j) => {

            if (j === i) {
                item.classList.remove('hide');
                item.classList.add('show', 'fade');
            } else {
                item.classList.remove('show');
                item.classList.add('hide', 'fade');
            }

        });
    });
});

//Price list slider

/* const slides = document.querySelectorAll('.plans-item'),
      slider = document.querySelector('.plans'),
      prev = document.querySelector('.left-scrolling'),
      next = document.querySelector('.right-scrolling'), */


function hideNavigation() {
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

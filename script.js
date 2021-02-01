const navToggle = document.querySelector('.nav-toggle'),
      menu = document.querySelector('.menu'),
      wrapperMenu = document.querySelectorAll('.nav-toggle-buttons'),
      menuButtons = document.querySelectorAll('.nav-toggle-buttons p'),
      plansItem = document.querySelectorAll('.plans-item'),
      circleSlider = document.querySelectorAll('.circle-slider'),
      sliderImg = document.querySelectorAll('.slider-img'),
      navButtons = document.querySelectorAll('.nav button'),
      contactsButtons = document.querySelectorAll('.contacts-buttons p'),
      screenWidth = window.outerWidth,
      scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );

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

window.addEventListener('scroll', function() {
    console.log(pageYOffset + 'px');
  });

scrollToSection(navButtons[0], 0);
scrollToSection(navButtons[1], 832);
scrollToSection(navButtons[2], 1664);
scrollToSection(navButtons[3], 2476);
scrollToSection(navButtons[4], 3275);
scrollToSection(navButtons[5], 4120);
scrollToSection(navButtons[6], 5032);

scrollToSection(contactsButtons[0], 0);
scrollToSection(contactsButtons[1], 832);
scrollToSection(contactsButtons[2], 1664);
scrollToSection(contactsButtons[3], 2476);
scrollToSection(contactsButtons[4], 3275);
scrollToSection(contactsButtons[5], 4120);
scrollToSection(contactsButtons[6], 5032);

if (screenWidth <= 1100) {

    hideNavigation();

    scrollToSection(menuButtons[0], 0);
    scrollToSection(menuButtons[1], 704);
    scrollToSection(menuButtons[2], 1526);
    scrollToSection(menuButtons[3], 2092);
    scrollToSection(menuButtons[4], 2852);
    scrollToSection(menuButtons[5], 3745);
    scrollToSection(menuButtons[6], scrollHeight);

}

if (screenWidth <= 834) {

    hideNavigation();

    scrollToSection(menuButtons[0], 0);
    scrollToSection(menuButtons[1], 714);
    scrollToSection(menuButtons[2], 1378);
    scrollToSection(menuButtons[3], 1918);
    scrollToSection(menuButtons[4], 2678);
    scrollToSection(menuButtons[5], 3564);
    scrollToSection(menuButtons[6], scrollHeight);

}

if (screenWidth <= 500) {

    hideNavigation();

    scrollToSection(menuButtons[0], 0);
    scrollToSection(menuButtons[1], 794);
    scrollToSection(menuButtons[2], 1746);
    scrollToSection(menuButtons[3], 2377);
    scrollToSection(menuButtons[4], 2996);
    scrollToSection(menuButtons[5], 3824);
    scrollToSection(menuButtons[6], scrollHeight);

}

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

function scrollToSection (btn, height) {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        scrollTo(0, height);
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
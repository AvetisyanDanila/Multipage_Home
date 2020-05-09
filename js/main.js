// Слайдеры
var swiper1 = new Swiper('.header__swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    effect: "fade",
    simulateTouch: false
});
var swiper2 = new Swiper('.swiper2', {
    slidesPerView: 1,
    spaceBetween: 58,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    simulateTouch: false
});
var swiper3 = new Swiper('.services__swiper', {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    navigation: {
        nextEl: '.services-arrows__right',
        prevEl: '.services-arrows__left',
    },
    breakpoints: {
        767: {
            slidesPerView: 3,
        },
    },
    simulateTouch: false
});
var swiper4 = new Swiper('.works__swiper', {
    slidesPerView: 1,
    spaceBetween: 35,
    effect: "cube",
    speed: 600,
    cubeEffect: {
        slideShadows: false,
        shadow: false,
    },
    navigation: {
        nextEl: '.works-arrows__right',
        prevEl: '.works-arrows__left',
    },
    simulateTouch: false
});
var swiper5 = new Swiper('.reviews-text__swiper', {
    slidesPerView: 1,
    spaceBetween: 35,
    speed: 800,
    effect: "flip",
    flipEffect: {
        slideShadows: false,
        shadow: false,
    },
    navigation: {
        nextEl: '.reviews-arrows__right',
        prevEl: '.reviews-arrows__left',
    },
    simulateTouch: false
});
var swiper6 = new Swiper('.reviews-people__swiper', {
    slidesPerView: 1,
    spaceBetween: 35,
    speed: 800,
    effect: "flip",
    flipEffect: {
        slideShadows: false,
        shadow: false,
    },
    navigation: {
        nextEl: '.reviews-arrows__right',
        prevEl: '.reviews-arrows__left',
    },
    simulateTouch: false
});
var swiper2 = new Swiper('.workers-swiper-mobile', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});
// Сотрудники
var d = document,
    img = d.querySelector('.workers-block__area img'),
    photo = [].slice.call(d.querySelectorAll('.workers-block__photo'));

photo.forEach(function (el) {
    el.addEventListener('click', changePhoto, false);
});

function changePhoto() {
    var that = this;
    img.src = that.dataset.img;
    photo.forEach(function (el) {
        el.style.borderWidth = (el == that ? '3px' : '1px');
    });
}

function ChangeName1() {
    document.getElementById("name").innerHTML = "Брайловская Наталья";
}
function ChangePos1() {
    document.getElementById("pos").innerHTML = "Генеральный директор, архитектор, градостроитель.";
}
function ChangeExp1() {
    document.getElementById("exp").innerHTML = "Опыт работы в проектировании и строительстве 15 лет";
}
function ChangeName2() {
    document.getElementById("name").innerHTML = "Юзбашев Владимир";
}
function ChangePos2() {
    document.getElementById("pos").innerHTML = "Главный архитектор.";
}
function ChangeExp2() {
    document.getElementById("exp").innerHTML = "Опыт работы 15 лет";
}
function ChangeName3() {
    document.getElementById("name").innerHTML = "Макарова Альбина";
}
function ChangePos3() {
    document.getElementById("pos").innerHTML = "Ведущий дизайнер.";
}
function ChangeExp3() {
    document.getElementById("exp").innerHTML = "Опыт работы 6 лет";
}
function ChangeName4() {
    document.getElementById("name").innerHTML = "Молохова Ольга";
}
function ChangePos4() {
    document.getElementById("pos").innerHTML = "Ведущий бухгалтер.";
}
function ChangeExp4() {
    document.getElementById("exp").innerHTML = "Опыт работы 8 лет";
}
function ChangeName5() {
    document.getElementById("name").innerHTML = "Измайлов Максим";
}
function ChangePos5() {
    document.getElementById("pos").innerHTML = "Бригадир ремонтной бригады №1.";
}
function ChangeExp5() {
    document.getElementById("exp").innerHTML = "Опыт работы 6 лет";
}
function ChangeName6() {
    document.getElementById("name").innerHTML = "Шиманович Демьян";
}
function ChangePos6() {
    document.getElementById("pos").innerHTML = "Бригадир ремонтной бригады №2.";
}
function ChangeExp6() {
    document.getElementById("exp").innerHTML = "Опыт работы 8 лет";
}
function ChangeName7() {
    document.getElementById("name").innerHTML = "Прохоров Владислав";
}
function ChangePos7() {
    document.getElementById("pos").innerHTML = "Бригадир ремонтной бригады №3.";
}
function ChangeExp7() {
    document.getElementById("exp").innerHTML = "Опыт работы 15 лет";
}
function ChangeName8() {
    document.getElementById("name").innerHTML = "Быков Петр";
}
function ChangePos8() {
    document.getElementById("pos").innerHTML = "Бригадир ремонтной бригады №4.";
}
function ChangeExp8() {
    document.getElementById("exp").innerHTML = "Опыт работы 6 лет";
}
// Модальное окно "Заказать звонок"
$('#callback').click(function () {
    $('.header-modal').fadeIn();
});
$('#close').click(function () {
    $('.header-modal').fadeOut();
});
$('#thank-close').click(function () {
    $('.thank-modal').fadeOut();
});
$("#modal_phonemask").mask("+7(999)999-99-99");
$("#calculator_phonemask").mask("+7(999)999-99-99");
$("#contacts_phonemask").mask("+7(999)999-99-99");
// Калькулятор
$('.services-block__btn').click(function () {
    $('.calculator').fadeIn();
});
$('.works__btn').click(function () {
    $('.calculator').fadeIn();
});
$('#calculator-close').click(function () {
    $('.calculator').fadeOut();
});
// Вопросы - ответы
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
// Мобильное меню
var menuButton = document.querySelector('.header-menu__button');
var menu = document.querySelector('.header__nav');
var logo = document.querySelector('.header__logo');
var cb = document.querySelector('#callback');
menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('header-menu__button-active');
    menu.classList.toggle('header__nav_active');
    logo.classList.toggle('d-none');
    cb.classList.toggle('d-none');
})
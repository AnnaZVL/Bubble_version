document.addEventListener("DOMContentLoaded", () => {
    // Скрытие бокового меню
    const $buttonClose = document.getElementById('close'),
        $aside = document.getElementById('aside');

    $buttonClose.addEventListener('click', () => {
        $aside.classList.toggle('hidden');
        $buttonClose.classList.toggle('show')
    })

    // Скрытие подменю
    const $buttonBoxClose = document.getElementById('closeBox'),
        $menuAll = document.querySelectorAll('.aside-personal__menu');

        $buttonBoxClose.addEventListener('click', (event) => {
            
            $buttonBoxClose.classList.toggle('visible')

            $menuAll.forEach(elem => {    
                if (elem.dataset.menu === event.target.dataset.menu)
                elem.classList.toggle('visible');
            })
    })

    //Смена активного пункта в боковой панели
    const asideMenu = document.querySelector('.aside-menu'),
        $heroBlock = document.getElementById('hero'),
        $eventBlock = document.getElementById('event');

    asideMenu.addEventListener('click', (event) => {
        const target = event.target;
        const asideMenuItem = target.closest('.aside-menu__item');

        if (asideMenuItem) {            
            document.querySelectorAll('.aside-menu__item').forEach(item => item.classList.remove('active'));

            asideMenuItem.classList.add('active');
            $eventBlock.classList.toggle('active-content');
            $heroBlock.classList.toggle('active-content');
        }
    });

    // Смена лайка
    const $btnLikeAll = document.querySelectorAll('.track__like')

    $btnLikeAll.forEach(like => {
        like.addEventListener('click', (event) => {
            console.log('object');
            like.classList.toggle('like')
        })
    })

    // Модальное окно
    // Открытие модального окна
    const $btnOpenModal = document.getElementById('sign'),
        $modal = document.getElementById('modal'),
        $btnCloseModal = document.getElementById('modalClose');

    $btnOpenModal.addEventListener('click', () => {
        $modal.classList.add('visible');
    });

    // Закрытие модальногоокна по кнопке
    $btnCloseModal.addEventListener('click', () => {
        console.log('close');
        $modal.classList.remove('visible');
    });

    // Закрытие модальногоокна по эскейп
    window.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {            
            $modal.classList.remove('visible');
        }
    });

    // Переключение форм входа
    // Смена кнопки
    const $loginBtn = document.getElementById('loginBtn'),
        $formAll = document.querySelector('.form'),
        $registerBtn = document.getElementById('registerBtn'),
        $checkbox = document.getElementById('reg-log');

    $formAll.addEventListener('submit', (event) => {
        event.preventDefault()
    });

    $loginBtn.addEventListener('click', function () {
        $checkbox.checked = false;
        $loginBtn.classList.add('active');
        $registerBtn.classList.remove('active');
    });

    $registerBtn.addEventListener('click', function () {
        $checkbox.checked = true;
        $registerBtn.classList.add('active');
        $loginBtn.classList.remove('active');        
    });
    
})
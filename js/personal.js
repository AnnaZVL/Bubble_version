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
    const asideMenu = document.querySelector('.aside-menu');

    asideMenu.addEventListener('click', (event) => {
        const target = event.target;
        const asideMenuItem = target.closest('.aside-menu__item');

        if (asideMenuItem) {
            
            document.querySelectorAll('.aside-menu__item').forEach(item => item.classList.remove('active'));

            asideMenuItem.classList.add('active');
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
        $modal.classList.remove('visible');
    });

    // Закрытие модальногоокна по эскейп
    window.addEventListener('keydown', () => {
        $modal.classList.remove('visible');      
    })

    // Переключение форм входа
    // Смена кнопки
    const $modalBtnAll = document.querySelectorAll('.modal__btn'),
        $formSign = document.getElementById('signUp'),
        $formLogin = document.getElementById('login');

    $modalBtnAll.forEach(btn => {
        btn.addEventListener('click', (event) => {
            $modalBtnAll.forEach(i => i.classList.remove('active'));           
            event.target.classList.add('active');
            
            $formLogin.classList.toggle('hidden');
            $formSign.classList.toggle('hidden');
        })
    })

    
})
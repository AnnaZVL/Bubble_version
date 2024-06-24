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
})
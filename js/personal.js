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
})
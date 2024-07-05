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
        document.body.classList.add('scroll-stop');
    });

    // Закрытие модального окна по кнопке
    $btnCloseModal.addEventListener('click', () => {        
        $modal.classList.remove('visible');
        document.body.classList.remove('scroll-stop');
    });

    // Закрытие модального окна по эскейп
    window.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {            
            $modal.classList.remove('visible');
            document.body.classList.remove('scroll-stop');
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
    
    // Слайдер секции топ исполнителей
    const swiperTop = new Swiper('.top__list', {        
        direction: 'horizontal',
        loop: true,  
        slidesPerGroup: 1,
        slidesPerView: 2,
        spaceBetween: 20,
        autoHeight: false,    
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },        
      });

      // Слайдер секции завершенные события
    const swiperOldEvent = new Swiper('.oldEvent__cards', {        
        direction: 'horizontal',
        loop: false,  
        slidesPerGroup: 1,
        slidesPerView: 2,
        spaceBetween: 20,
        autoHeight: false,    
        navigation: {
            nextEl: '.swiper-button__next',
            prevEl: '.swiper-button__prev',
          },
      });

    // Кнопка загрузки
    const $btnDownload = document.getElementById('download'),
    $list = document.querySelector('.header__box');

    $btnDownload.addEventListener('click', () => {
        $list.classList.add('show');
    })

    // Закрытие списка по эскейп
    window.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && $list.classList.contains('show')) {            
            $list.classList.remove('show');
        }
    });

    // Кнопка Релиз на дистрибуцию
    const $btnDownloadDistrib = document.getElementById('downloadDistrib'),
    $distribSection = document.getElementById('distribSection');

    $btnDownloadDistrib.addEventListener('click', () => {
        $eventBlock.classList.remove('active-content');
        $heroBlock.classList.remove('active-content');
        $distribSection.classList.add('active-content');
        $list.classList.remove('show');
    })

    const $btnDownloadMinus = document.getElementById('downloadMinus')

    const $btnAddLink= document.getElementById('addLink')

    // Смена секций загрузить песню или альбом
    const $btnAdd = document.querySelectorAll('.download__btn'),        
        $questions = document.getElementById('questions'),
        $sections = document.querySelectorAll('.download__section')
        $steps = document.querySelectorAll('.steps__item');
       
    $btnAdd.forEach(btn => {    
        btn.addEventListener('click', (event) => {
            const currentBtn = event.target.closest('.download__btn');

            if (currentBtn) {
                $btnAdd.forEach(btn => {
                    btn.classList.remove('active');
                });

                $sections.forEach(item => {
                    item.classList.add('section-hidden')
                    if (item.dataset.name === currentBtn.dataset.name) {
                        item.classList.remove('section-hidden')
                    };
                });

         
                $steps[1].classList.add('active')
             
      
                $questions.classList.add('section-hidden');
                currentBtn.classList.add('active');
            }
            
        })
    })

    // настройка Выбора жанра
    const element = document.getElementById('genre');
    const choices = new Choices(element, {
        searchEnabled: false,
        allowHTML: true
    });

    // Шаги добавления песни
    const $btnStepTwo = document.querySelector('.singl__form-btn'),
        $singlForm = document.querySelector('.singl__form'),
        $singlFormAudio = document.querySelector('.singl__form-audio'),
        $sectionStepTwo = document.querySelector('.download__section-step2'),
        $sectionStepThree = document.querySelector('.download__section-step3');

        $singlForm.addEventListener('submit', (event) => {
            event.preventDefault();
            $sectionStepTwo.classList.add('section-hidden');
            $sectionStepThree.classList.remove('section-hidden');

            $steps[2].classList.add('active')
        })

        $singlFormAudio.addEventListener('submit', (event) => {
            event.preventDefault();

            $steps[3].classList.add('active');
        })
})
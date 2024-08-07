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

    //Смена активного пункта в боковой панели и секции основного контента
    const $asideMenuAll = document.querySelectorAll('.aside-menu__item'),
        $sectionsContent = document.querySelectorAll('.section__content');

    $asideMenuAll.forEach(item => {    
        item.addEventListener('click', (event) => {
            const target = event.target;
            const asideMenuItem = target.closest('.aside-menu__item');
            
            if (asideMenuItem) {                   
                $asideMenuAll.forEach(i => i.classList.remove('active'))
                asideMenuItem.classList.add('active') 

                $sectionsContent.forEach(content => {
                    if (content.dataset.content === asideMenuItem.dataset.content) {
                        content.classList.add('active-content');
                                         
                    } else {
                        content.classList.remove('active-content');    
                                    
                    }
                });
            }
        });
    })

    // Смена лайка
    const $btnLikeAll = document.querySelectorAll('.track__like')

    $btnLikeAll.forEach(like => {
        like.addEventListener('click', (event) => {            
            like.classList.toggle('like')
        })
    })

    // Модальное окно
    // Открытие модального окна
    const $btnOpenModal = document.getElementById('sign'),
        $modal = document.getElementById('modal'),
        $btnCloseModal = document.querySelectorAll('#modalClose'),
        $btnAgreement = document.getElementById('agreement'),
        $modalAgreement = document.getElementById('modalAgreement');

    $btnOpenModal.addEventListener('click', () => {
        $modal.classList.add('visible');
        document.body.classList.add('scroll-stop');
    });

    // Закрытие модального окна по кнопке
    $btnCloseModal.forEach(btn => {
        btn.addEventListener('click', () => {  
            
            if ($modal) {
                $modal.classList.remove('visible');
            } 
            if ($modalAgreement) {                
                $modalAgreement.classList.remove('visible');
            }
            
            document.body.classList.remove('scroll-stop');
        });
    });

    // Закрытие модального окна по эскейп
    window.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {            
            if ($modal) {
                $modal.classList.remove('visible');
            } 
            if ($modalAgreement) {                
                $modalAgreement.classList.remove('visible');
            }
            document.body.classList.remove('scroll-stop');
        }
    });

    // Открытие модалки с реквизитами договора
    $btnAgreement.addEventListener('click', () => {
        $modalAgreement.classList.add('visible');
        document.body.classList.add('scroll-stop');
    })

    // Переключение форм входа
    // Смена кнопки
    const loginBtn = document.getElementById('loginBtn'),
        formAll = document.querySelector('.form'),
        registerBtn = document.getElementById('registerBtn'),
        checkbox = document.getElementById('reg-log');

    formAll.addEventListener('submit', (event) => {
        event.preventDefault()
    });

    loginBtn.addEventListener('click', function () {
        checkbox.checked = false;
        loginBtn.classList.add('active');
        registerBtn.classList.remove('active');
    });

    registerBtn.addEventListener('click', function () {
        checkbox.checked = true;
        registerBtn.classList.add('active');
        loginBtn.classList.remove('active');        
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
    const $btnDownloadDistrib = document.getElementById('downloadDistrib');

    $btnDownloadDistrib.addEventListener('click', () => {
        $sectionsContent.forEach(content => {           
            content.classList.remove('active-content');
            if (content.dataset.content === 'distribSection') {
                content.classList.add('active-content');
            }
        })
      
        $list.classList.remove('show');
    })

    const $btnDownloadMinus = document.getElementById('downloadMinus')

    const $btnAddLink= document.getElementById('addLink')

    // настройка Выбора жанра
    const $ganre = document.getElementById('genre');
    const choicesGenre = new Choices($ganre, {
        searchEnabled: false,
        allowHTML: true
    });

    // Шаги добавления песни
    const $stepSections = document.querySelectorAll('.step__section'),
        $steps = document.querySelectorAll('.steps__item'),
        $btnSteps = document.querySelectorAll('.step__btn'),
        $formTwo = document.querySelector('.form-two'),
        $formThree = document.querySelector('.form-three'),
        $formFour = document.querySelector('.form-four'),
        $formFive = document.querySelector('.form-five'),
        $formPromo = document.querySelector('.promo__form'),
        $addedSingl = document.querySelector('.added-singl');
        
    $btnSteps.forEach(btn => {
        btn.addEventListener('click', () => {
            const currentStep = btn.dataset.step;
             
            $stepSections.forEach(item => {
                
                if (item.dataset.step === currentStep) {
                    item.classList.remove('section-hidden');
                    if ($steps[currentStep - 1])
                    $steps[currentStep - 1].classList.add('active')
                } else {
                    item.classList.add('section-hidden');
                }
            })
        })
    })

    $formTwo.addEventListener('submit', (event) => {
        event.preventDefault();       
    });

    $formThree.addEventListener('submit', (event) => {
        event.preventDefault();

        $addedSingl.style.display = 'flex';            
    })

    $formFour.addEventListener('submit', (event) => {
        event.preventDefault();       
    });

    $formFive.addEventListener('submit', (event) => {
        event.preventDefault();       
    });

    $formPromo.addEventListener('submit', (event) => {
        event.preventDefault();       
    });

    // Фильтрация каталога
    const $filter = document.getElementById('filter');
    const choicesFilter = new Choices($filter, {
        searchEnabled: false,
        allowHTML: true
    });
    // Фарма реквизитов договора
    const $formAgreement = document.querySelector('#formAgreement');

    $formAgreement.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const newRequisites = {
            user: {
                fio: document.querySelector('#fio').value,
                date: document.querySelector('#date').value,
                email: document.querySelector('#mail').value,
                snils: document.querySelector('#snils').value,
                inn: document.querySelector('#inn').value,
                pasport: {
                    number: document.querySelector('#number').value,
                    series: document.querySelector('#series').value,
                    department: document.querySelector('#departament').value,
                    date: document.querySelector('#datePasport').value,
                    cod: document.querySelector('#cod').value,
                    address: document.querySelector('#address').value,                    
                }
            },
            bank: {
                fio: document.querySelector('#recipient').value,
                name: document.querySelector('#nameBank').value,
                checking: document.querySelector('#checking').value,
                checkingCorr: document.querySelector('#checkingCorr').value,
                bik: document.querySelector('#bik').value
            }
        }

        console.log('object', newRequisites);
    })
})
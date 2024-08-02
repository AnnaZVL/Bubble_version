document.addEventListener("DOMContentLoaded", () => {
    // Бургер меню
    const $burger = document.getElementById('burger'),
      $nav = document.getElementById('nav'),
      $menuItems = document.querySelectorAll('.menu__item'),
      $sectionHero = document.querySelector('.hero'),
      $sectionAll = document.querySelector('.all');

    $burger.addEventListener('click', () => {
        $burger.classList.toggle('open');
        $nav.classList.toggle('open')
    })

    // Смена секций при выборе пункта меню и закрытие бургера
    $menuItems.forEach(item => {
        item.addEventListener('click', (event) => {
            const target = event.target;

            if (target.dataset.section === 'home') {
              changeHero();
            } else {
              changeHero(false)
              
            }

            if (target.closest('.menu__item')) {
                closeBurger()
            }
        })
    })    
    
    // Закрытие бургера по эск
    window.addEventListener('keydown', closeBurger())

    function closeBurger () {
      $burger.classList.remove('open');
      $nav.classList.remove('open');
    }

    // Смена видимости секций
    function changeHero(heroVisible = true) {
      if (heroVisible) {
        $sectionHero.classList.remove('hidden');
        $sectionAll.classList.add('hidden');
        setTimeout(() => {
        $sectionHero.style.display = 'block'
      }, 200)
      } else {
        $sectionHero.classList.add('hidden');
        $sectionAll.classList.remove('hidden');
        
        // setTimeout(() => {
          $sectionHero.style.display = 'none'
          console.log('object');
        // }, 300)
        // console.log('111');
      }
    }
 
  // Видеоплеер
  const videoPlayer = document.getElementById('videoPlayer');

  // Массив с URL видеофайлов
  const videos = [
    './images/home_page/train.mp4', 
    './images/home_page/IG-stories.mp4' 
  ];

  let currentVideoIndex = 0;

  // Функция для загрузки и воспроизведения видео
  const playVideo = (index) => {    
    if (index < videos.length) {
      videoPlayer.src = videos[index];
      videoPlayer.load();
    }     
  };

  // Событие `canplay` срабатывает, когда видео готово к воспроизведению
  videoPlayer.addEventListener('canplay', () => {
    videoPlayer.play();

    // Установите таймер для переключения видео через 3 секунды
    setTimeout(() => {
      videoPlayer.pause();
      if (currentVideoIndex === (videos.length - 1)) {        
        currentVideoIndex = 0;    
    } else { 
        currentVideoIndex++;
    }
    //   if (currentVideoIndex === videos.length) {currentVideoIndex === 0}
      playVideo(currentVideoIndex);
    }, 3000); // 3000 миллисекунд = 3 секунды
  });

  // Запускаем воспроизведение первого видео
  playVideo(currentVideoIndex);

  // Создание и анимация всплывающих точек
  const $bublContainer = document.getElementById('bubl');

  function createdot(initial = false) {
    
    const $dot = document.createElement('div');
    $dot.classList.add('dot');
    
    $dot.style.left = `${Math.random() * 100}%`;

    if (initial) {    
      $dot.style.bottom = `${Math.random() * 100}vh`
        
      $dot.style.animationDelay = `${Math.random() * 10}s`;
      $dot.style.animationDuration = `${15 + Math.random() * 5}s`;
    } else {    
        $dot.style.bottom = `0vh`
        $dot.style.animationDelay = `${Math.random() * 10}s`;
        $dot.style.animationDuration = `${45 + Math.random() * 5}s`;
    }
    
    $bublContainer.appendChild($dot);

    $dot.addEventListener('animationend', () => {
        $dot.remove();
    });
  }

  for (let i = 0; i < 450; i++) {
    createdot(true);
  }

  setInterval(() => createdot(), 500);


  // const $navLinks = document.querySelectorAll('.menu__link'),
  //     $sectionHero = document.querySelector('.hero'),
  //     $sectionAll = document.querySelector('.all');

  //     $navLinks.forEach(link => () => {
  //       console.log(link);
  //       link.addEventListener('click', () => {
  //         $sectionHero.classList.add('hidden');
  //         $sectionAll.classList.remove('hidden');
  //       })
  //     })
})

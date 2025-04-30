document.addEventListener('DOMContentLoaded', function() {
    const scrollContent = document.querySelector('.scroll__sec2');
    const scrollContainer = document.querySelector('.scroll-container');
    const scrollItems = document.querySelectorAll('.block1__scroll');
    const leftBtn = document.getElementById('left-btn');
    const rightBtn = document.getElementById('right-btn');
    
    let currentIndex = 0;
    const itemWidth = scrollItems[0].offsetWidth + 30; 
    const visibleItems = Math.floor(scrollContainer.offsetWidth / itemWidth);
    
    function updateScroll() {
        const maxScroll = (scrollItems.length - visibleItems) * itemWidth;
        const scrollPosition = Math.min(currentIndex * itemWidth, maxScroll);
        
        scrollContent.style.transform = `translateX(-${scrollPosition}px)`;
        
        leftBtn.style.display = currentIndex === 0 ? 'none' : 'flex';
        rightBtn.style.display = currentIndex >= scrollItems.length - visibleItems ? 'none' : 'flex';
    }
    
    leftBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateScroll();
        }
    });
    
    rightBtn.addEventListener('click', function() {
        if (currentIndex < scrollItems.length - visibleItems) {
            currentIndex++;
            updateScroll();
        }
    });
    
    updateScroll();
    
    window.addEventListener('resize', function() {
        const newVisibleItems = Math.floor(scrollContainer.offsetWidth / itemWidth);
        if (newVisibleItems !== visibleItems) {
            currentIndex = 0;
            updateScroll();
        }
    });
});


const fixedNav = document.querySelector('.fixed-nav');

window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        fixedNav.classList.add('scrolled');
    } else {
        fixedNav.classList.remove('scrolled');
    }
});

 // Скрипт для управления скроллом и точками навигации
 const benefitsScroll = document.getElementById('benefitsScroll');
 const scrollNav = document.getElementById('scrollNav');
 const dots = scrollNav.querySelectorAll('.scroll-dot');
 
 // Обновление активной точки при скролле
 benefitsScroll.addEventListener('scroll', () => {
     const scrollPosition = benefitsScroll.scrollLeft;
     const cardWidth = benefitsScroll.querySelector('.benefit-card').offsetWidth + 30; // ширина карточки + gap
     const activeIndex = Math.round(scrollPosition / cardWidth);
     
     dots.forEach((dot, index) => {
         dot.classList.toggle('active', index === activeIndex);
     });
 });
 
 // Переход по клику на точки
 dots.forEach((dot, index) => {
     dot.addEventListener('click', () => {
         const cardWidth = benefitsScroll.querySelector('.benefit-card').offsetWidth + 30;
         benefitsScroll.scrollTo({
             left: index * cardWidth,
             behavior: 'smooth'
         });
     });
 });
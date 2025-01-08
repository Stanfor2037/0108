window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;
    if (scrollPosition > 10) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});

const marquee = document.querySelector('.marquee');

marquee.addEventListener('mouseenter', () => {
    marquee.style.animationPlayState = 'paused';
});

marquee.addEventListener('mouseleave', () => {
    marquee.style.animationPlayState = 'running';
});

// 滾動觸發線條動畫
window.addEventListener('scroll', () => {
    const leftLine = document.querySelector('.left-line');
    const rightLine = document.querySelector('.right-line');
    const section = document.querySelector('.section');

    // 取得該區塊頂部位置和視窗高度
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // 當區塊進入視窗時觸發動畫
    if (sectionTop < windowHeight / 1.5) {
        leftLine.classList.add('animate');
        rightLine.classList.add('animate');
    }
});


document.getElementById("scrollButton").addEventListener("click", function (event) {
    event.preventDefault();  // 阻止預設跳轉行為
    window.scrollBy({
        top: 200,  // 向下滾動的距離 (600px)
        behavior: 'smooth'  // 平滑滾動效果
    });
});




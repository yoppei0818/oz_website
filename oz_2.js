
// ヘッダー切り替え
{
    const header = document.querySelector('header');
    window.addEventListener('scroll', ()=>{
		if (window.scrollY > 852 && window.innerWidth > 414) {
            header.style.transition = ' 0.4s';
            header.classList.add('header-changed');
        } else {
            header.style.transition = ' 0.4s';
            header.classList.remove('header-changed');
        }
    });
}

// スムーススクロール
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
for(let i = 0; i < smoothScrollTrigger.length; i++) {
    smoothScrollTrigger[i].addEventListener('click', (e)=>{
        e.preventDefault();
        let href = smoothScrollTrigger[i].getAttribute('href');
        // hrefの#を取ったものを()内へ
        let targetElement = document.getElementById(href.replace('#', ''));
        const height = targetElement.getBoundingClientRect().top;
        const offset = window.pageYOffset;
        const headerGap = 60;
        const target = height + offset - headerGap;
        window.scrollTo({
            top: target,
            behavior: 'smooth',
          });
    });
}

// レスポンシブヘッダー
{
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-items');
        const navItems = document.querySelectorAll('.nav-items li');
    
        
        burger.addEventListener('click',()=>{
            //toggle nav
            nav.classList.toggle('nav-active');
            
            //メニューが出てくるアニメーション
            navItems.forEach((item, index)=>{
                if (item.style.animation) {
                    item.style.animation = '';
                } else {
                    item.style.animation = `navItemsFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                }
            });
    
            //burger animation 
            burger.classList.toggle('toggle');
        });
            
    }

    navSlide();
}

// スライドショー
{
    const slideShow = document.querySelector('.slideshow');
    const image = document.querySelectorAll('.slideshow img');
    
    // ボタン
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // カウンター
    let counter = 1;
    const size = image[0].clientWidth;

    slideShow.style.transform = 'translateX('+(-size*counter)+'px)';

    // ボタンイベント
    nextBtn.addEventListener('click',()=>{
        if(counter >= image.length -1) return;
        slideShow.style.transition = 'transform 0.4s ease-in-out';
        counter++;
        slideShow.style.transform = 'translateX('+(-size*counter)+'px)';

    });
    
    prevBtn.addEventListener('click',()=>{
        if(counter <= 0) return;
        slideShow.style.transition = 'transform 0.4s ease-in-out';
        counter--;
        slideShow.style.transform = 'translateX('+(-size*counter)+'px)';
    });

    slideShow.addEventListener('transitionend',()=>{
        if(image[counter].id === 'lastClone') {
            // 0.4sかけて元の画像に飛ぶんじゃなく、瞬時に戻るようにする
            slideShow.style.transition = 'none';
            counter = image.length - 2;
            slideShow.style.transform = 'translateX('+(-size*counter)+'px)';
        }

        if(image[counter].id === 'firstClone') {
            // 0.4sかけて元の画像に飛ぶんじゃなく、瞬時に戻るようにする
            slideShow.style.transition = 'none';
            counter = image.length - counter;
            slideShow.style.transform = 'translateX('+(-size*counter)+'px)';
        }
    });
}

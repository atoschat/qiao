document.getElementById('heart-btn').addEventListener('click', function() {
    document.getElementById('heart-btn').innerHTML = "LOVE YOU QIAO :)";
    const gallery = document.getElementById('gallery');
    gallery.style.display = 'block';

    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('fade-in');
            item.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, index * 1000);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const langSwitcher = document.getElementById('lang-switcher');
    let isHungarian = false;

    langSwitcher.addEventListener('click', function () {
        isHungarian = !isHungarian;

        if (isHungarian) {
            document.getElementById('header-title').textContent = '欢迎巧巧💖爱你🌟';
            document.getElementById('about-title').textContent = '我的小仙女💕';
            document.getElementById('about-text').innerHTML = '你对我来说意味着一切<br>' +
                '你是我的生命, <br>' +
                '你让我的心充满爱,<br>' +
                '我为你疯狂, <br>' +
                '你给我的生活带来欢乐, <br>' +
                '我的心属于你, <br>' +
                '我接受你本来的样子, <br>' +
                '我崇拜你 💖.';
            document.getElementById('gallery-title').textContent = '画廊📸';
            document.getElementById('pic1-text').textContent = '您最新的照片 ❤️';
            document.getElementById('pic2-text').textContent = '你令人上瘾的眼睛 🤭';
            document.getElementById('pic3-text').textContent = '你的双手😳😄';
            document.getElementById('pic4-text').textContent = '还有我最喜欢的一个 💖💤';
            document.getElementById('footer-text').textContent = '亚历克斯！ ^^❤️:)';
            langSwitcher.textContent = 'Switch to English';
        } else {
            document.getElementById('header-title').textContent = 'Welcome Qiao 💖 Love YOU 🌟';
            document.getElementById('about-title').textContent = 'My Girl 💕';
            document.getElementById('about-text').innerHTML = 'You mean everything to me<br>' +
                'You are My Life, <br>' +
                'You fill My Heart with love,<br>' +
                'I\'m crazy about you, <br>' +
                'You Bring Joy to My Life, <br>' +
                'My Heart Belongs to you, <br>' +
                'I accept you as you are, <br>' +
                'I adore you 💖.';
            document.getElementById('gallery-title').textContent = 'Gallery 📸';
            document.getElementById('pic1-text').textContent = 'Your Latest Picture ❤️';
            document.getElementById('pic2-text').textContent = 'Your Addictive Eyes 🤭';
            document.getElementById('pic3-text').textContent = 'Your hands😳😄';
            document.getElementById('pic4-text').textContent = 'And My Favorite One 💖💤';
            document.getElementById('footer-text').textContent = 'Alex! ^^ ❤️ :)';
            langSwitcher.textContent = 'Switch to Chinese';
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        document.getElementById('loading-screen').style.display = 'none';
        document.body.classList.add('loaded');
    }, 5000); // Duration should match the animation duration (5 seconds)
});
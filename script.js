// 星星旋转效果
function rotateStar() {
    const star = document.querySelector('.star');
    let rotation = 0;
    
    setInterval(() => {
        rotation += 1;
        star.style.transform = `rotate(${rotation}deg)`;
    }, 50);
}

// 装饰球随机颜色
function setOrnamentColors() {
    const ornaments = document.querySelectorAll('.ornament');
    const colors = ['#ff0000', '#ff9900', '#ffff00', '#00ff00', '#0099ff', '#ff00ff'];
    
    ornaments.forEach(ornament => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        ornament.style.backgroundColor = randomColor;
        
        // 随机闪烁动画延迟
        const randomDelay = Math.random() * 2;
        ornament.style.animationDelay = `${randomDelay}s`;
    });
}

// 雪花飘落效果
function createSnowflakes() {
    const snowflakesContainer = document.querySelector('.snowflakes');
    const snowflakeCount = 100;
    
    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        
        // 随机大小
        const size = Math.random() * 8 + 2;
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        
        // 随机位置
        snowflake.style.left = `${Math.random() * 100}%`;
        
        // 随机下落速度
        const duration = Math.random() * 10 + 5;
        snowflake.style.animationDuration = `${duration}s`;
        
        // 随机延迟
        const delay = Math.random() * 10;
        snowflake.style.animationDelay = `${delay}s`;
        
        // 随机透明度
        snowflake.style.opacity = Math.random() * 0.8 + 0.2;
        
        snowflakesContainer.appendChild(snowflake);
    }
}

// 初始化所有效果
function init() {
    rotateStar();
    setOrnamentColors();
    createSnowflakes();
}

// 页面加载完成后执行
window.addEventListener('DOMContentLoaded', init);
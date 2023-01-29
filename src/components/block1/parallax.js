export default function paralaxMouseInit() {
    const paralaxMouse = document.querySelectorAll('[data-prlx-mouse]');
    paralaxMouse.forEach(el => {
        const paralaxMouseWrapper = el.closest('[data-prlx-mouse-wrapper]');

        // Коэф. X 
        const paramСoefficientX = el.dataset.prlxCx ? +el.dataset.prlxCx : 300;
        // Коэф. У 
        const paramСoefficientY = el.dataset.prlxCy ? +el.dataset.prlxCy : 300;
        // Напр. Х
        let directionX = el.hasAttribute('data-prlx-dxr') ? -1 : 1;
        if(el.getAttribute('data-prlx-mouse') === "true") {
            directionX = el.hasAttribute('data-prlx-dxr') ? -1 : 1;
        }
        else {
            directionX = el.hasAttribute('data-prlx-dxr') ? -1 : -1;
        }
        
        // Напр. У
        const directionY = el.hasAttribute('data-prlx-dyr') ? -1 : 1;
        // Скорость анимации
        const paramAnimation = el.dataset.prlxA ? +el.dataset.prlxA : 30;


        // Объявление переменных
        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;

        setMouseParallaxStyle();

        // Проверяю на наличие родителя, в котором будет считываться положение мыши
        if (paralaxMouseWrapper) {
            mouseMoveParalax(paralaxMouseWrapper);
        } else {
            mouseMoveParalax();
        }

        function setMouseParallaxStyle() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;
            positionX = positionX + (distX * paramAnimation / 1000);
            positionY = positionY + (distY * paramAnimation / 1000);
            el.style.cssText = `transform: translate3D(${directionX * positionX / (paramСoefficientX / 10)}%,${directionY * positionY / (paramСoefficientY / 10)}%,0);`;
            requestAnimationFrame(setMouseParallaxStyle);
        }
        function mouseMoveParalax(wrapper = window) { 
            wrapper.addEventListener("mousemove", function (e) {
                const offsetTop = el.getBoundingClientRect().top + window.scrollY;
                if (offsetTop >= window.scrollY || (offsetTop + el.offsetHeight) >= window.scrollY) {
                    // Получение ширины и высоты блока
                    const parallaxWidth = window.innerWidth;
                    const parallaxHeight = window.innerHeight;
                    // Ноль по середине
                    const coordX = e.clientX - parallaxWidth / 2;
                    const coordY = e.clientY - parallaxHeight / 2;
                    // Получаем проценты
                    coordXprocent = coordX / parallaxWidth * 100;
                    coordYprocent = coordY / parallaxHeight * 100;
                }
            });
        }
    });
}
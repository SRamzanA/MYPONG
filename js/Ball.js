const Ball = document.getElementById("ball")
const Racket1 = document.getElementById("racket1")
const Racket2 = document.getElementById("racket2")


// Описание мячика
let ObjectBall = {
    size: parseFloat(getComputedStyle(Ball).width),
    speedX: 0.9,
    speedY: 0.7,
    topIndex: 40,
    leftIndex: 40
}

console.log(ObjectBall)

// Цикл для мячика
function updateBallPosition() {
    // Изменение координат
    ObjectBall.topIndex += ObjectBall.speedY
    ObjectBall.leftIndex += ObjectBall.speedX

    // Обновление координат
    Ball.style.top = `${ObjectBall.topIndex}%`
    Ball.style.left = `${ObjectBall.leftIndex}%`

    // Получение подробных координат
    const ballTop = parseFloat(getComputedStyle(Ball).top)
    const ballBottom = parseFloat(getComputedStyle(Ball).bottom)
    const ballLeft = parseFloat(getComputedStyle(Ball).left)
    const ballRight = parseFloat(getComputedStyle(Ball).right)

    const racketTop1 = parseFloat(getComputedStyle(Racket1).top)
    const racketBottom1 = parseFloat(getComputedStyle(Racket1).bottom)
    const racketLeft1 = parseFloat(getComputedStyle(Racket1).left)
    const racketRight1 = parseFloat(getComputedStyle(Racket1).right)

    const racketTop2 = parseFloat(getComputedStyle(Racket2).top)
    const racketBottom2= parseFloat(getComputedStyle(Racket2).bottom)
    const racketLeft2 = parseFloat(getComputedStyle(Racket2).left)
    const racketRight2 = parseFloat(getComputedStyle(Racket2).right)

    // Проверка столкновений
    if (ballBottom <= 0 || ballTop <= 0) {
        ObjectBall.speedY *= -1
    }
    if (ballLeft <= 0 || ballRight <= 0) {
        ObjectBall.speedX *= -1
    }
    if (ballLeft + ObjectBall.size >= racketLeft2 && ballRight + ObjectBall.size >= racketRight2 && ballTop > racketTop2 && ballBottom > racketBottom2) {
        ObjectBall.speedX *= -1
        Ball.style.left = `${racketLeft2 - ObjectBall.size}px`
    }
    if (ballRight + ObjectBall.size >= racketRight1 && ballLeft + ObjectBall.size >= racketLeft1  && ballTop > racketTop1 && ballBottom > racketBottom1) {
        ObjectBall.speedX *= -1
    }
    



    // Запуск после отрисовки
    requestAnimationFrame(updateBallPosition)
}

updateBallPosition()
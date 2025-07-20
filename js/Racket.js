const racket1 = document.getElementById("racket1")
const racket2 = document.getElementById("racket2")

// Описание ракеток
let ObjectRacket1 = {
    height: 20,
    speed: 1,
    top: 40
}

let ObjectRacket2 = {
    height: 20,
    speed: 1,
    top: 40
}

// Объект для отслеживания состояния клавиш
const keysPressed = {
    w: false,
    s: false,
    arrowup: false,
    arrowdown: false
}

// Обработчики нажатия и отпускания клавиш
document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() in keysPressed) {
        keysPressed[e.key] = true
    }
})

document.addEventListener('keyup', (e) => {
    if (e.key.toLowerCase() in keysPressed) {
        keysPressed[e.key] = false
    }
})

// Цикл для ракеток
function gameLoop() {
    // Ракетка 1 (W/S)
    if (keysPressed.w && ObjectRacket1.top > 0) {
        ObjectRacket1.top -= ObjectRacket1.speed
        racket1.style.top = `${ObjectRacket1.top}%`
    }
    if (keysPressed.s && ObjectRacket1.top + ObjectRacket1.height < 100) {
        ObjectRacket1.top += ObjectRacket1.speed
        racket1.style.top = `${ObjectRacket1.top}%`
    }

    // Ракетка 2 (Стрелки)
    if (keysPressed.ArrowUp && ObjectRacket2.top > 0) {
        ObjectRacket2.top -= ObjectRacket2.speed
        racket2.style.top = `${ObjectRacket2.top}%`
    }
    if (keysPressed.ArrowDown && ObjectRacket2.top + ObjectRacket2.height < 100) {
        ObjectRacket2.top += ObjectRacket2.speed
        racket2.style.top = `${ObjectRacket2.top}%`
    }

    requestAnimationFrame(gameLoop) // вызов перед отрисовкой
}

gameLoop()
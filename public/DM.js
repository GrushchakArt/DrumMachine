//Собираем кнопки по классу и трансформируем в массив.
const buttons = document.querySelectorAll('.button');
buttonsArr = Array.from(buttons)
console.log(buttons)

//Собираем звуки по классу и трансформируем в массив.
const sounds = document.getElementsByClassName('sound');
soundsArr = Array.from(sounds)

//Функция пробегается по массиву кнопок и ищет кнопку чей текст контент идентичен нажатой кнопке.
let searchButtonSound = (event) => {
    for (const button of buttons) {
        if (!button.classList.contains('hitted')) {
            if (event.key == button.textContent) {
                hittedButtonText = button.textContent
                button.classList.add('hitted')
            } else {
                continue
            }
            playButtonSound(hittedButtonText, button)
        }
    }
}

//Функция проигравает звук если переданный ей текст идентичен текст контенту звука.
let playButtonSound = (text, button) => {
    let playable;
    for (const sound of sounds) {
        if (text == sound.textContent) {
            sound.play()
        }
    }
    //Функция ставит звук на паузу если переданная ей кнопка отжата. И мотает звук на начало.
    document.addEventListener('keyup', function (event) {
        button.classList.remove('hitted')
        playable.pause()
        playable.currentTime = 0
    })
}

//Слушаем нажатие клавиши.
//Кладем в hittedButton элемент с классоом .hitted
//Проверяем если hittedButton не пустой то очищаем, иначе запускаем функцию searchButtonSound
document.addEventListener('keydown', function (event) {
    const hittedButton = this.querySelector('.hitted')
    console.log(hittedButton)
    hittedButton ? hittedButton.classList.remove('hitted') : searchButtonSound(event)
});

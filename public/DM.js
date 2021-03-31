//Собираем кнопки по классу и трансформируем в массив.
const buttons = document.getElementsByClassName('button');
buttonsArr = Array.from(buttons)
console.log(buttons)

//Собираем звуки по классу и трансформируем в массив.
const sounds = document.getElementsByClassName('sound');
soundsArr = Array.from(sounds)

//Функция пробегается по массиву кнопок и ищет кнопку чей текст контент идентичен нажатой кнопке.
function searchButton(event) {
    for (const button of buttons) {
        if (!button.classList.contains('hitted')) {
            if (event.key == button.textContent) {
                hittedButtonText = button.textContent
                button.classList.add('hitted')
            } else {
                continue
            }
            searchSound(hittedButtonText, button)
        }
    }
}

//Функция проигравает звук если переданный ей текст идентичен текст контенту звука.
function searchSound(text, button) {
    let playable;
    for (const sound of sounds) {
        if (text == sound.textContent) {
            playable = sound
            playable.play()
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
//Проверяем если hittedButton не пустой то очищаем, иначе запускаем функцию searchButton
document.addEventListener('keydown', function (event) {
    let hittedButton = this.querySelector('.hitted')
    console.log(hittedButton)
    if (hittedButton !== null) {
        hittedButton.classList.remove('hitted')
    } else {
        searchButton(event)
    }
});

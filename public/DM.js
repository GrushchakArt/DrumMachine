
const buttons = document.getElementsByClassName('button');
console.log(buttons)
let audio = document.getElementById("soundBoom")


window.addEventListener(document.getElementById("clickBoom").onclick, event => {
    let audio = document.getElementById("soundBoom")
    audio.play();
    alert('sound!')
});



//1) подготовка
//2) получение данных от пользователя
//3) воспроизведение
//4) завершение

/**
 * у каждой клавиши есть класс button.
 * * они собраны в массив buttons.
 * К каждой клавише привязан звук и именная клавиша.

 * когда именная клавиша или клавиша мыши нажата,
 * соответствующая кнопка получает класс hittedButton
 */
/*
    К каждой кнопке должен быть привязан звук и клавиша.
    При нажатии клавиши или коике по кнопке, звук должен воспроизводиться.
    Воспроизведение звука прерывает воспроизведение любого другого звука.
*/


const buttons = document.getElementsByClassName('button');
const sounds = document.getElementsByClassName('sound');
const drums = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

document.addEventListener('keydown', function (event) {
    let hittedSound;
    let hittedButtonText;
    for (const button of buttons) {
        if (!button.classList.contains('hitted')) {
            if (drums.includes(event.key) && event.key == button.textContent) {
                hittedButtonText = button.textContent
                console.log(button.classList)
                button.classList.add('hitted')
                console.log(button.classList)
                console.log(hittedButtonText)
            } else {
                continue
            }
            for (const sound of sounds) {
                if (hittedButtonText == sound.textContent) {
                    sound.play()
                    break
                } else {
                    continue
                }
            }
        } else {
            break
        }
        setTimeout(function () {
            button.classList.remove('hitted')
        }, 500)
        return
    }
});


const buttons = document.getElementsByClassName('button');
buttonsArr = Array.from(buttons)
console.log(buttons)
const sounds = document.getElementsByClassName('sound');
soundsArr = Array.from(sounds)

document.addEventListener('keydown', function (event) {
    let hittedButton = this.querySelector('.hitted')
    let hittedButtonText;
    let playable;
    console.log(hittedButton)
    if (hittedButton !== null) {
        hittedButton.classList.remove('hitted')
    } else {
        for (const button of buttons) {
            if (!button.classList.contains('hitted')) {
                if (event.key == button.textContent) {
                    hittedButtonText = button.textContent
                    button.classList.add('hitted')
                } else {
                    continue
                }
                for (const sound of sounds) {
                    if (hittedButtonText == sound.textContent) {
                        playable = sound
                        playable.play()
                    }
                }
            }
            document.addEventListener('keyup', function (event) {
                button.classList.remove('hitted')
                playable.pause()
                playable.currentTime = 0
            })
        }
    }
});

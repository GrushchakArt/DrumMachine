
const buttons = document.getElementsByClassName('button');
const sounds = document.getElementsByClassName('sound');
const drums = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

document.addEventListener('keydown', function (event) {
    let hittedSound;
    let hittedButtonText;
    // console.log('Key: ', event.key);
    for (const button of buttons) {
        if (!button.classList.contains('hitted')) {
            if (drums.includes(event.key) && event.key == button.textContent) {
                // console.log('event key = ' + event.key + ' and ' + 'button text content = ' + button.textContent)
                // console.log('true')
                hittedButtonText = button.textContent
                console.log(button.classList)
                button.classList.add('hitted')
                console.log(button.classList)
                console.log(hittedButtonText)
            } else {
                // console.log('event key = ' + event.key + ' and ' + 'button text content = ' + button.textContent)
                // console.log('false')
                continue
            }

            for (const sound of sounds) {
                // console.log(hittedButtonText)
                if (hittedButtonText == sound.textContent) {
                    // console.log(sound.textContent + ' sound')
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

const buttons = document.getElementsByClassName('button');
const sounds = document.getElementsByClassName('sound');
let hittedSound;
let hittedButton;

function drumMachine(button) {
    let buttonText = button.textContent
    for (const sound of sounds) {
        let soundText = sound.textContent
        if (soundText == buttonText) {
            sound.play()
        }
    }
}

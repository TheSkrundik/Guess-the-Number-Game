const generateNumber = () => {
    return Math.round(Math.random() * 10)
}

const getResult = (guess) => {
    guess = parseInt(guess.trim())

    if(isNaN(guess)) {
        return 'You should only use numbers!';
    }

    const correctAnswer = generateNumber();

    return (guess === correctAnswer) ? 'You win!' :  `You failed! The number was  ${correctAnswer}`
}

const input = document.querySelector('#js-input')
const button = document.querySelector('#js-button')
const result = document.querySelector('#js-result')

input.addEventListener('keyup', (eventKeyUp) => {
    if (eventKeyUp.keyCode === 13) {
        eventKeyUp.preventDefault()
        button.click()
    }
})

button.addEventListener('click', (eventButton) => {
    eventButton.preventDefault()
    // Выводим пользователю результат внутри блока #result. .innerHTML заменяет содержимое блока на указанное
    result.innerHTML =  getResult(input.value)
})
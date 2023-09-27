const computerOptions = ['Rock', 'Paper', 'Scissors'];

const computerChoice = () => {
    const randomNumber = Math.round(Math.random() * 2);
    return computerOptions[randomNumber];
}

const computerChoiceOutput = document.getElementById('computer-choice-output');
const playerOptions = document.querySelectorAll('.choice-button');
const playerChoiceOutput = document.getElementById('user-choice-output');

playerOptions.forEach((button) => {
    button.addEventListener('click', function() {
        const selectedValue = button.textContent;
        if (selectedValue) {
            playerChoiceOutput.textContent = selectedValue;
            computerChoiceOutput.textContent = computerChoice();
        }
    });
});
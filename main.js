const computerOptions = ['Rock', 'Paper', 'Scissors'];

const computerChoice = () => {
    const randomNumber = Math.round(Math.random() * 2);
    return computerOptions[randomNumber];
}

const userChoice = document.getElementById('dropdown');
const userChoiceOutput = document.getElementById('user-choice-output');
const computerChoiceOutput = document.getElementById('computer-choice-output');

userChoice.addEventListener('change', function () {
    const selectedValue = userChoice.value;
    if (selectedValue) {
        userChoiceOutput.textContent = selectedValue;
        computerChoiceOutput.textContent = computerChoice();
    }
});
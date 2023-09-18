const computerOptions = ['Rock', 'Paper', 'Scissors'];

const computerChoice = () => {
    const randomNumber = Math.round(Math.random() * 2);
    return computerOptions[randomNumber];
}
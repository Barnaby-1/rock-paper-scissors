let countDownValue = 5;

const updateCountdown = () => {
    const selectedValue = userChoice.value;
    if (selectedValue) {
        const displayCountdown = document.getElementById('seconds');
        displayCountdown.textContent = countDownValue;
        countDownValue--;
        if (countDownValue <= 0) {
            countDownValue = 0;
        }
    }
    
}

setInterval(updateCountdown, 1000);
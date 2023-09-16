let countdownValue = 5;

const updateCountdown = () => {
    let selectedValue = userChoice.value;
    if (selectedValue) {
        const displayCountdown = document.getElementById('seconds');
        displayCountdown.textContent = countdownValue;
        countdownValue--;
        userChoice.setAttribute('disabled', 'disabled');
        if (countdownValue < 0) {
            userChoice.removeAttribute('disabled');
            clearInterval(intervalID);
            selectedValue = null;
        }
    }
}

userChoice.addEventListener('change', function () {
    selectedValue = userChoice.value;
    countdownValue = 5;
    clearInterval(intervalID);
    intervalID = setInterval(updateCountdown, 1000);
});

intervalID = setInterval(updateCountdown, 1000);
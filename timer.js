// Task 1: Countdown Timer
function startTimer() {
    let myInterval = setInterval(function() {
        currentTime = document.getElementById("timer").innerHTML;
        newTime = currentTime - 1;
        if (newTime == -1) {
            clearInterval(myInterval);
            alert("Timer Done!");
        } else {
            document.getElementById("timer").innerHTML = newTime;
        }
    },1000);
};

document.getElementById("startButton").addEventListener("click", function() {
    setTime = document.getElementById("secondsField").value;
    document.getElementById("timer").innerHTML = setTime;
    startTimer();
});

// Task 2: Delayed Notification
document.getElementById("notify").addEventListener("click", function() {
    setTimeout(function() {
        alert("Notfication!")
    }, 5000);
});

// Task 3: Repeat Notification
function alertFunction() {
    alert("10 Seconds have passed!")
};

document.getElementById("notifyRepeat").addEventListener("click", function() {
    alertInterval = setInterval(alertFunction, 3000);
});

document.getElementById("notifyStop").addEventListener("click", function() {
    clearInterval(alertInterval);
});

let randomNumber,
    inputNumber,
    button,
    answer,
    counter,
    attempts,
    replay,
    replayButton,
    modal,
    maxNumber,
    numberOfAttempts,
    play,
    close,
    shutButton,
    opnedWindow,
    startReplayButton
;

answer = document.getElementById("answer");
button = document.getElementById("button");

//open modal when game start
modal = document.querySelector(".modal");
modal.style.display = "flex";
play = document.getElementById("play");

//counter need for counting clicks
counter = 0;
replay = document.querySelector(".replay");
replayButton = document.getElementById("replayButton");

//replay when game is not over
startReplayButton = document.getElementById("startReplayButton").addEventListener("click", function(){
    location.reload();
});

//killing button
shutButton = document.getElementById("shutButton").addEventListener("click", function () {
    history.back(-2);
});

close = document.querySelector(".modal__close").addEventListener("click", function () {
    modal.style.display = "none";
    maxNumber = 10;
    numberOfAttempts = 3;
    attempts = numberOfAttempts;
    randomNumber = Math.floor((Math.random() * maxNumber) + 1);
    console.log(randomNumber);
});

play.addEventListener("click", function () {
    modal.style.display = "none";
    maxNumber = document.getElementById("maxNumber").value;
    numberOfAttempts = document.getElementById("numberOfAttempts").value;
    if (maxNumber <= 0 && numberOfAttempts <= 0) {
        maxNumber = 10;
        numberOfAttempts = 3;
    }
    attempts = numberOfAttempts;
    randomNumber = Math.floor((Math.random() * maxNumber) + 1);
    console.log(randomNumber);
});

button.addEventListener("click", function () {
    inputNumber = document.getElementById("enteredNumber").value;
    counter += 1;
    if (randomNumber == inputNumber) {
        answer.innerHTML = `<span style="display: flex; text-align: center; color: #008000; font-size: 20px; text-transform: uppercase;">Congratulations, you win!</span>`;
        button.style.display = "none";
        document.getElementById("startReplayButton").style.display = "none";
        replay.style.display = "flex";
        replayButton.addEventListener("click", function () {
            location.reload();
        });
    } else {
        if (counter == attempts) {
            answer.innerHTML = "Your attempts are over!";
            button.style.display = "none";
            document.getElementById("startReplayButton").style.display = "none";
            replay.style.display = "flex";
            replayButton.addEventListener("click", function () {
                location.reload();
            });
        } else {
            answer.innerHTML = `Answer is incorrect, try again, but you have only <span style="background: green; color: yellow; font-size: 20px;">" ${attempts - counter} "</span> attempts`;
        }
    }
});
var button = document.querySelectorAll(".box");
var resBut = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#play-again");
let msgCont = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")
const audio = document.querySelector("#myAudio");
var turn = true;
var winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

button.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box was clicked");
        // box.classList.add("col");
        if (turn) {
            box.innerText = "X";
            box.style.color = "red"
            turn = false;
        } else {
            box.innerText = "O"
            box.style.color = "blue"
            turn = true;
        }

        box.disabled = true;
        checkwinner();
    });
});

const disableBox = () => {
    for (let box of button) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of button) {
        box.disabled = false;
        box.innerText = "";
    }

}

const checkwinner = () => {
        for (var patterns of winPatterns) {
            // console.log(patterns[0], patterns[1], patterns[2]);
            // console.log(button[patterns[0]], button[patterns[1]], button[patterns[2]]);
            var ps0 = button[patterns[0]].innerText;
            var ps1 = button[patterns[1]].innerText;
            var ps2 = button[patterns[2]].innerText;
            if (ps0 != "" && ps1 != "" && ps2 != "") {
                if (ps0 === ps1 && ps1 == ps2) {
                    // alert(`Winner is ${ps1}`);
                    // alert(`congratulations🎊 ${ps1}`)
                    audio.play();
                    shoWinner(ps1);
                }
            }
        }
    }
    ///////////////////////// Winner interface func
const shoWinner = (winner) => {
    msg.innerText = `Congratulation, winner is ${winner}`;
    msgCont.classList.remove("hide");
    disableBox();

}


const restGame = () => {
    turn = true;
    enableBoxes();
    msgCont.classList.add("hide");
}

// resBut.addEventListener("")
newBtn.addEventListener("click", restGame);
resBut.addEventListener("click", restGame)
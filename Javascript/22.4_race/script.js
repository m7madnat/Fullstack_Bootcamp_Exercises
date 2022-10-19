const first = document.querySelector("#player1-race");
const second = document.querySelector("#player2-race");

window.addEventListener("keyup", playerStep);
function playerStep(e) {
    let currPos;
    let racer;
    if (e.key === "ArrowRight") {
        currPos = first.querySelector(".active");
        racer = "player 1";
    } else if (e.key === "6") {
        currPos = second.querySelector(".active");
        racer = "player 2";
    }
    currPos.classList.remove("active");
    currPos.nextElementSibling.classList.add("active");
    if (currPos.nextElementSibling.classList.contains("finish")) {
        alert(`${racer} has won ,Refresh the page to play again`);
        window.removeEventListener("keyup", playerStep);         
    }
}

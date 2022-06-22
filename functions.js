function createButtons(number) {
    winner = Math.floor(Math.random() * number) + 1;
    for (let i = 1; i <= number; ++i) {
        let newButton = document.createElement("button");
        newButton.innerHTML = "Click me!";
        newButton.id = i;
        newButton.classList = "btn btn-warning";
        newButton.onclick = function () { checkWinner(this.id); };
        document.getElementById("createHere").appendChild(newButton);
    }
}

function checkWinner(id) {
    const message = document.createElement("p");
    if (winner == id) {
        message.innerHTML = "You won!";
    } else {
        message.innerHTML = "You lose! I was behind button " + winner + ".";
    }
    document.getElementById("createHere").appendChild(message);
}

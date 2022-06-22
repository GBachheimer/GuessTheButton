function checkWinner(id) {
    const message = document.createElement("p");
    if (winner == id) {
        message.innerHTML = "You won!";
    } else {
        message.innerHTML = "You lose! I was behind button " + winner + ".";
    }
    document.getElementById("createHere").appendChild(message);
}

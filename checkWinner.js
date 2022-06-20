function checkWinner(id) {
    if (winner == id) {
        document.getElementById("createHere").append("<h1>You won !!</h1>");
    } else {
        document.getElementById("createHere").append("<h1>You lose !! I was behind button " + winner + ".</h1>");
    }
}

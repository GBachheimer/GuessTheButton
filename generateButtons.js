function createButtons(number) {
    var winner = Math.floor(Math.random() * number) + 1;
    for (let i = 1; i <= number; ++i) {
        let newButton = document.createElement("button");
        newButton.innerHTML = "Click me!";
        newButton.id = i;
        newButton.classList = "btn btn-warning"
        newButton.onclick = "checkWinner(this.id.value)";
        document.getElementById("createHere").appendChild(newButton);
    }
}

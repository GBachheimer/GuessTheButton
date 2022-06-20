function createButtons (number) {
    const number = document.getElementById("number").value;
    var winner = Math.floor(Math.random() * number) + 1;
    for (let i = 1; i <= number; ++i) {
        document.getElementById("createHere").apped("
            <button id = '"+ i +"' onclick = 'checkWinner()'>Click me!</button>
        ");
    }
}

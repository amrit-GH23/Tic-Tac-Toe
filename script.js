let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];
let currentPlayer = "X";
let gameActive = true;

function makeMove(row, col) {
    if (board[row][col] === "" && gameActive) {
        board[row][col] = currentPlayer;
        document.getElementsByTagName("table")[0].rows[row].cells[col].innerText = currentPlayer;

        if (checkWinner(currentPlayer)) {
            document.getElementById("message").innerText = `${currentPlayer} Wins!`;
            gameActive = false;
        } else if (board.flat().every(cell => cell !== "")) {
            document.getElementById("message").innerText = "It's a Draw!";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkWinner(player) {
    return (
        [0, 1, 2].some(i => board[i].every(cell => cell === player) || [0, 1, 2].every(j => board[j][i] === player)) ||
        (board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
        (board[0][2] === player && board[1][1] === player && board[2][0] === player)
    );
}

function resetGame() {
    board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    currentPlayer = "X";
    gameActive = true;
    document.getElementById("message").innerText = "";
    document.querySelectorAll("td").forEach(cell => (cell.innerText = ""));
}
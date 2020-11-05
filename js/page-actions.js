let selectedCellIndex = 0;
let cellsOrder = [1, 2, 3, 6, 5, 4];

function linkClicked() {
    selectedCellIndex++;

    if (selectedCellIndex > 5) {
        selectedCellIndex = 0;
    }

    let activeCell = document.getElementsByClassName("cell active");
    activeCell[0].classList.remove("active");

    let cells = document.getElementsByClassName("cell");
    for (i = 0; i < cells.length; i++) {
        if (selectedCellIndex == i) {
            cells[cellsOrder[i] - 1].classList.add("active");
        }
    }
}

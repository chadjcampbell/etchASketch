function drawGrid(size) {
    let grid = document.querySelector('#grid');
    for (let i=0; i<size; i++) {
        let row = document.createElement('div');
        row.classList.add('row')
        grid.appendChild(row);
        for (let j=0; j<size; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell')
            row.appendChild(cell);
        }
    }
}

drawGrid(32);
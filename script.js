function setColor() {
    let colorPicked = document.querySelector('#colorpicker');
    return colorPicked.value;
}

function startListen() {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mousemove', (event) => {
            if (event.buttons == 1) {
                cell.style.backgroundColor = setColor();
        }});
    });
};

function drawGrid(size) {
    let grid = document.querySelector('#grid');
    removeAllChildNodes(grid);
    for (let i=0; i<size; i++) {
        let row = document.createElement('div');
        row.classList.add('row')
        grid.appendChild(row);
        for (let j=0; j<size; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell')
            row.appendChild(cell);
        };
    };
    startListen();
};

drawGrid(25);

let reset = document.querySelector('#reset')
reset.addEventListener('click', () => {
    drawGrid(size.innerHTML)
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
});

var slider = document.getElementById("myRange");
var size = document.getElementById("size");
size.innerHTML = slider.value;

slider.oninput = function() {
  size.innerHTML = this.value;
};

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
};
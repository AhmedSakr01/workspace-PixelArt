//Golobal Variables...
var grid_height = 20;
var grid_width = 20;
var color = '#ff0000';
const table = document.getElementById('gridTable');
const colorBtn = document.getElementById('userColor');
gridSetup(grid_height, grid_width);
table.setAttribute('style', 'border: red 2px solid');
// Grid size setup....

var submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', function (event) {
  event.preventDefault();
  grid_height = document.getElementById('gridHeight').value;
  grid_width = document.getElementById('gridWidth').value;
  gridSetup(grid_height, grid_width);
  //Change the grid size
});


//Change grid function...
function gridSetup(h, w) {
  table.innerHTML = '';
  for (let i = 0; i < h; i++) {
    let row = document.createElement('tr');
    for (let j = 0; j < w; j++) {
      let column = document.createElement('td');
      row.appendChild(column);
    }
    table.appendChild(row);
  }

}

// drawing... 
table.addEventListener('click', function (event) {
  if (event.target.nodeName == 'TD') {
    let target = event.target;

    target.setAttribute('style', 'background-color:' + colorBtn.value);
  }
});
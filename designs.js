// defined variables by selecting the elements that the user will interact with
const inputHeight = document.querySelector('#input_height');
const inputWidth = document.querySelector('#input_width');
const colorPicker = document.querySelector('#colorPicker');
const canvas = document.querySelector('#pixel_canvas');
const sizePicker = document.querySelector('#sizePicker');

// selected color input
function selectColor(color) {
  if (color.target.nodeName.toLowerCase() === 'td') {
    color.target.style.backgroundColor = colorPicker.value;
  }
};

//selected size input and added an eventListener on form submit button
sizePicker.addEventListener('submit', function(event) {
  event.preventDefault();
  let height, width;
  height = input_height.value;
  width = input_width.value;
  makeGrid(height, width);
});

//function that builds the grid
function makeGrid(height, width) {
  for (let r = 0; r < height; r++) {
    let row = document.createElement('tr');
    for (let c = 0; c < width; c++) {
      let cell = document.createElement('td');
      row.appendChild(cell);
    }
    canvas.appendChild(row);
  }
};

//added an eventListener to canvas
canvas.addEventListener('click', selectColor);

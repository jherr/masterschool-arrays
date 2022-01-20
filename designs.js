// Select color input
const colorPicker = document.getElementById("colorPicker");
let color = colorPicker.value;

// Update the `color` variable whenever a user picks a different color.
colorPicker.addEventListener("change", () => {
  color = colorPicker.value;
});

// When size is submitted by the user, call makeGrid()
const form = document.getElementById("sizePicker");
form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  makeGrid();
});

/*
 * Set the background color of a cell to the chosen color, otherwise
 * resets the cell's background color (to '') when the cell is clicked, if
 *    the background-color is the same as the color on the color picker
 *
 * params: target => HTMLElement
 */
function colorCell(target) {
  if (target.style.backgroundColor === hexToRgb(color)) {
    target.style.backgroundColor = "";
  } else {
    target.style.backgroundColor = color;
  }
}

/*
 * Convert `hex` colors to `rgb` format.
 *
 * params: hexColor => string representation of hex color format.
 */
function hexToRgb(hexColor) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);

  return result
    ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
        result[3],
        16
      )})`
    : null;
}

/*
 * Draw a grid on the Pixel-Canvas
 */
let cells = [];
function makeGrid() {
  const height = Number(document.getElementById("inputHeight").value);
  const width = Number(document.getElementById("inputWidth").value);
  const table = document.getElementById("pixelCanvas");

  // Clear the table before drawing a new grid
  table.innerHTML = "";

  // Draw a `height` by `width` grid while adding `click` event-listener to the cells
  cells = [];
  for (let w = 0; w < height; w++) {
    const row = table.insertRow();
    for (let h = 0; h < width; h++) {
      const cell = row.insertCell();
      cell.addEventListener("click", (evt) => {
        console.log("cell location", [w, h]);
        colorCell(evt.target);
      });
      cells.push(cell);
    }
  }
}

document.getElementById("clearButton").addEventListener("click", (evt) => {
  // for (let i = 0; i < cells.length; i++) {
  //   cells[i].style.backgroundColor = "";
  // }
  for (const cellIndex in cells) {
    cells[cellIndex].style.backgroundColor = "";
  }
});

document.getElementById("checkerCanvas").addEventListener("click", (evt) => {
  for (const cellIndex in cells) {
    if (cellIndex % 2 === 0) {
      cells[cellIndex].style.backgroundColor = "white";
    } else {
      cells[cellIndex].style.backgroundColor = "black";
    }
  }
});

const colors = ["red", "orange", "yellow", "green", "purple", "blue"];

document.getElementById("rainbowCanvas").addEventListener("click", (evt) => {
  function paintCell(cell, cellIndex) {
    cell.style.backgroundColor = colors[cellIndex % colors.length];
  }
  cells.forEach(paintCell);

  const paintCell = (cell, cellIndex) => {
    cell.style.backgroundColor = colors[cellIndex % colors.length];
  };
  cells.forEach(paintCell);

  cells.forEach((cell, cellIndex) => {
    cell.style.backgroundColor = colors[cellIndex % colors.length];
  });
});

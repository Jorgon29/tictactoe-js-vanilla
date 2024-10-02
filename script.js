import {insertRegistry, resetRegister} from "./history.js";

var cross;

function activateCell(cell) {
  if (cell.innerHTML === "") {
    if (cross) {
      cell.innerHTML = '<i class="fa-solid fa-x"></i>';
      cell.style.color = "blue";
      if(checkWin()) return;
      changeSubtitle("Next: O");
    } else {
      cell.innerHTML = '<i class="fa-regular fa-circle"></i>';
      cell.style.color = "red";
      if(checkWin()) return;
      changeSubtitle("Next: X");
    }
    cross = !cross;
    insertRegistry();
  }
  
}


function reset() {
  let cells = document.querySelectorAll("td");
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }
  resetRegister();
}

function changeSubtitle(text) {
  let subtitle = document.querySelector("h2");
  subtitle.innerHTML = text;
}

function checkWin() {
  let cells = document.querySelectorAll("td");
  let combs = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  console.log(cells);
  for (let i = 0; i < 8; i++) {
    if (
      cells[combs[i][0]].innerHTML == cells[combs[i][1]].innerHTML &&
      cells[combs[i][1]].innerHTML == cells[combs[i][2]].innerHTML &&
      cells[combs[i][0]].innerHTML != ""
    ) {
      changeSubtitle(`Winner: ${cells[combs[i][0]].innerHTML}`);
      return true;
    }
  }
  console.log("Win not found :(");
  return false;
}

function init() {
  cross = true;
  let cells = document.querySelectorAll("td");
  for (let index = 0; index < cells.length; index++) {
    cells[index].addEventListener("click", () => activateCell(cells[index]));
    cells[index].innerHTML = "";
  }
  changeSubtitle("Next: X");
  document.querySelector('button').addEventListener("click", () => reset());
}

init();

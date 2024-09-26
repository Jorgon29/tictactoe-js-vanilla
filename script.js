var cross;

function activateCell(cell){
  if(cell.innerHTML === ''){
    if(cross){
      cell.innerHTML = '<i class="fa-solid fa-x"></i>';
      cell.style.color = 'blue';
    } else {
      cell.innerHTML = '<i class="fa-regular fa-circle"></i>';
      cell.style.color = 'red';
    }
    cross = !cross;
  }
}

function reset(){
  let cells = document.querySelectorAll('td');
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = '';
  }
}

function init(){
  cross = true;
  let cells = document.querySelectorAll('td');
  console.log('Before loop');
  console.log(cells);
  console.log('after cells');
  for (let index = 0; index < cells.length; index++) {
    cells[index].addEventListener("click", () => activateCell(cells[index]));
    cells[index].innerHTML = '';
  }
}

init();

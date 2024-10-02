var register = [];

export function insertRegistry(){
    document.querySelector('ul').innerHTML = ''; 
    let result = [];
    let cells = document.querySelectorAll('td');
    cells.forEach(cell => {
        result.push(cell.innerHTML);
    });
    register.push(result);
    
    drawButtons();
}

export function resetRegister(){
    register = [];
    document.querySelector('ul').innerHTML = '';
}

function changeToMovement(entry){
    document.querySelector('ul').innerHTML = '';
    let cells = document.querySelectorAll('td');
    for (let i = 0; i < 9; i++) {
        cells[i].innerHTML = register[entry][i];
    }
    register = register.slice(0, entry);
    document.querySelector('ul').innerHTML = ''; 
    insertRegistry();
}

function drawButtons(){
    let list = document.querySelector('ul');
    for (let i = 0; i < register.length; i++) {
        let item = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = `Go to movement ${i}`;
        button.addEventListener("click", () => changeToMovement(i));
        item.appendChild(button);
        list.appendChild(item);
    }
}



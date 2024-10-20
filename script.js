const button = document.querySelector('.button-task');
const input = document.querySelector('.input-task');
const listaCompleta = document.querySelector('.list-task');

let myList = []


function adicionarTarefa() {
    myList.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''
    mostrarTarefas();
}

function mostrarTarefas() {

    let novaLI = ''

    myList.forEach( (item, index) => {
        novaLI = novaLI + `
        <li class="task ${item.concluida && "done"}">
          <img src="image/checked.png" alt="img-checked" onclick="tarefaRealizada(${index})"/>
            <p>${item.tarefa}</p>
          <img src="image/trash.png" alt="img-trash" onclick="deletarItem(${index})" />
        </li>`
    })

    listaCompleta.innerHTML = novaLI
    localStorage.setItem('lista', JSON.stringify(myList))
}


function deletarItem(index) {
    myList.splice(index, 1)

    mostrarTarefas()
}


function tarefaRealizada(index) {
    myList[index].concluida = !myList[index].concluida;
    mostrarTarefas()

}

function recarregarTarefas() {
    const tarefasLocalStorage = localStorage.getItem('lista');

    if(tarefasLocalStorage){
        myList = JSON.parse(tarefasLocalStorage);
    }
    mostrarTarefas();
}


recarregarTarefas();

button.addEventListener('click', adicionarTarefa)


import { setMode } from './setMode.js'
import { getTasks } from './getTasks.js'
import { changeToEditMode } from './changeToEditMode.js';

export function editTasks(){
    const taskListUl = document.getElementById("taskList");
    const taskListLi = taskListUl.querySelectorAll("li");
    const taskList = JSON.parse(localStorage.getItem("taskList"));
    
    taskListLi.forEach((li, index) => {
        const checkbox = li.querySelector("input[type='checkbox']");
        if (checkbox.checked){
            taskList[index].task = prompt(`Editar item ${index + 1} da lista`);
        }
    })
    localStorage.setItem("taskList", JSON.stringify(taskList));

    setMode("defaultMode");
    const buttonEdit = document.getElementById('editTasks');
    buttonEdit.removeEventListener('click', editTasks);
    buttonEdit.addEventListener('click', changeToEditMode)
    getTasks();
}
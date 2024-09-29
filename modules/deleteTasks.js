import { setMode } from './setMode.js'
import { getTasks } from './getTasks.js'
import { changeToDeleteMode } from './changeToDeleteMode.js';

export function deleteTasks() {
    const taskListUl = document.getElementById("taskList");
    const taskListLi = taskListUl.querySelectorAll("li");
    const taskList = JSON.parse(localStorage.getItem("taskList"));
    let removedCount = 0;
    
    taskListLi.forEach((li, index) => {
        const checkbox = li.querySelector("input[type='checkbox']");
        if (checkbox.checked){
            taskList.splice(index - removedCount, 1);
            removedCount++;
        }
    })
    localStorage.setItem("taskList", JSON.stringify(taskList));

    setMode("defaultMode");
    const buttonDelete = document.getElementById('deleteTask');
    buttonDelete.removeEventListener('click', deleteTasks);
    buttonDelete.addEventListener('click', changeToDeleteMode)
    getTasks();
}
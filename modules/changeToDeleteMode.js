import { setMode } from './setMode.js'
import { getTasks } from './getTasks.js'
import { deleteTasks } from './deleteTasks.js';

export function changeToDeleteMode() {
    setMode("deleteMode");
    const buttonDelete = document.getElementById('deleteTask');
    buttonDelete.removeEventListener('click', changeToDeleteMode);
    buttonDelete.addEventListener('click', deleteTasks)
    getTasks();
}
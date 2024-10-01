import { editTasks } from "./editTasks.js";
import { setMode } from "./setMode.js";
import { getTasks } from "./getTasks.js";

export function changeToEditMode() {
    setMode("editMode");
    const buttonEdit = document.getElementById('editTasks');
    buttonEdit.removeEventListener('click', changeToEditMode);
    buttonEdit.addEventListener('click', editTasks)
    getTasks();
}
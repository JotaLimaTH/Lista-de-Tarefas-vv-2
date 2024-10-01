import { addTask } from './modules/addTask.js'
import { getTasks } from './modules/getTasks.js'
import { setMode } from './modules/setMode.js'
import { changeToDeleteMode } from './modules/changeToDeleteMode.js';
import { changeToEditMode } from './modules/changeToEditMode.js';

const buttonAddTask = document.getElementById('addTask');
const buttonDelete = document.getElementById('deleteTask');
const buttonEdit = document.getElementById('editTasks')

buttonAddTask.addEventListener('click', addTask);
buttonDelete.addEventListener('click', changeToDeleteMode);
buttonEdit.addEventListener('click', changeToEditMode);

setMode("defaultMode")
getTasks();
import { addTask } from './modules/addTask.js'
import { getTasks } from './modules/getTasks.js'
import { setMode } from './modules/setMode.js'
import { changeToDeleteMode } from './modules/changeToDeleteMode.js';

const buttonAddTask = document.getElementById('addTask');
const buttonDelete = document.getElementById('deleteTask');

buttonAddTask.addEventListener('click', addTask);
buttonDelete.addEventListener('click', changeToDeleteMode);

setMode("defaultMode")
getTasks();
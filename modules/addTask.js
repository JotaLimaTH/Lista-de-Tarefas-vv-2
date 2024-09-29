import { getTasks } from './getTasks.js'

export function addTask() {
    const inputTask = document.getElementById("newTask");
    const newTask = inputTask.value;
    if (newTask.trim() == ""){
        return;
    }
    const taskList = JSON.parse(localStorage.getItem('taskList')) || [];
    taskList.push({ task: newTask, finished: 'false' })
    localStorage.setItem('taskList', JSON.stringify(taskList));
    inputTask.value = "";
    getTasks()    
}
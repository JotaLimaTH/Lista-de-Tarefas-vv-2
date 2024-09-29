export function getTasks() {
    const taskListUl = document.getElementById("taskList");
    taskListUl.innerHTML = '';

    const taskList = JSON.parse(localStorage.getItem('taskList')) || [];

    taskList.forEach((task, index) => {
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.innerHTML = task.task;

        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";

        li.appendChild(span);
        li.appendChild(checkbox);
        taskListUl.appendChild(li);

        if (taskListUl.mode == "defaultMode") {
            checkbox.style.display = "none";
        }
    });
}
document.addEventListener("DOMContentLoaded", ()=> {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask () {
        const textTask = taskInput.value.trim();
        if (textTask === "") {
            window.alert("Enter a task!");
            return;
        }
        
        const li = document.createElement('li');
        li.textContent = textTask;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };
        
        li.appendChild(removeBtn);
        taskList.appendChild(li);
        taskInput.value = '';

        
    
    }
    addButton.addEventListener("click", ()=> {
        addTask();
    }) 
    taskInput.addEventListener("keypress", (Event) => {
        if (Event.key === "Enter") {
            addTask();
        }
    })


    
    })
  

















// document.addEventListener("DOMContentLoaded", ()=> {
//     const addButton = document.getElementById('add-task-btn');
//     const taskInput = document.getElementById('task-input');
//     const taskList = document.getElementById('task-list');

//     function addTask () {
//         const textTask = taskInput.value.trim();
//         if (textTask === "") {
//             window.alert("Enter a task!");
//             return;
//         }
        
//         const li = document.createElement('li');
//         li.textContent = textTask;

//         const removeBtn = document.createElement('button');
//         removeBtn.textContent = 'Remove';
//         removeBtn.className = 'remove-btn';

//         removeBtn.onclick = () => {
//             taskList.removeChild(li);
//         };
        
        
//         taskList.appendChild(li);
//         taskInput.value = '';

        
    
//     }
//     addButton.addEventListener("click", ()=> {
//         addTask();
//     }) 
//     taskInput.addEventListener("keypress", (Event) => {
//         if (Event.key === "Enter") {
//             addTask();
//         }
//     })


    
//     })
  





// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get and trim the input value
        const taskText = taskInput.value.trim();

        // If the input is empty, alert the user
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create a new list item for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');
;

        // Add click event to remove the task
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Append the remove button to the task item
        li.appendChild(removeButton);

        // Append the task item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // Add event listener to the Add Task button
    addButton.addEventListener('click', addTask);

    // Add event listener for Enter key press in input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});










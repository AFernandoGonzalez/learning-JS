
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

const addTask = () => {
    // Create task item
    const taskItem = document.createElement('li');
    taskItem.innerText = taskInput.value;
    taskList.appendChild(taskItem);

    // Create remove button
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    taskItem.appendChild(removeButton);

    // Clear input and focus
    taskInput.value = '';
    taskInput.focus();

    // Remove task item
    const removeTask = () => {
        taskItem.remove();
    }

    // Add event listener to remove button
    removeButton.addEventListener('click', removeTask);

}


// Add event listener to add button
addButton.addEventListener('click', addTask);


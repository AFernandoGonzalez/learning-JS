const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Function to create a new task item
const createTaskItem = (text) => {
    const taskItem = document.createElement('li');
    taskItem.innerText = text;

    const divElement = document.createElement('div');
    divElement.appendChild(taskItem);

    // Create remove button
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.addEventListener('click', () => {
        divElement.remove();
    });
    divElement.appendChild(removeButton);

    // Create update button
    const updateButton = document.createElement('button');
    updateButton.innerText = 'Update';
    updateButton.addEventListener('click', () => {
        const updateInput = document.createElement('input');
        updateInput.type = 'text';
        updateInput.value = taskItem.innerText;

        // Replace the task item with the input field for editing
        divElement.innerHTML = '';
        divElement.appendChild(updateInput);

        // Create an "Update" button for editing
        const confirmUpdateButton = document.createElement('button');
        confirmUpdateButton.innerText = 'Confirm Update';
        confirmUpdateButton.addEventListener('click', () => {
            taskItem.innerText = updateInput.value;
            divElement.innerHTML = '';
            divElement.appendChild(taskItem);
            divElement.appendChild(removeButton);
            divElement.appendChild(updateButton);
        });

        divElement.appendChild(confirmUpdateButton);
    });

    divElement.appendChild(updateButton);
    return divElement;
};

const addTask = () => {
    const text = taskInput.value.trim();
    if (text) {
        const taskItem = createTaskItem(text);
        taskList.appendChild(taskItem);

        // Clear input and focus
        taskInput.value = '';
        taskInput.focus();
    }
};

// Add event listener to add button
addButton.addEventListener('click', addTask);

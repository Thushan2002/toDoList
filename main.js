const form = document.getElementById("inputForm");
const inputValue = document.getElementById("inputValue");
const noTasks = document.getElementsByClassName("noTasks")[0];
const availableTasks = document.getElementsByClassName("availableTasks")[0];
const lists = availableTasks.querySelector("li");

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const items = inputValue.value;

    if (items === "") {
        return;
    } else {

        noTasks.style.display = 'none';
        availableTasks.style.display = 'block';

        const newItem = document.createElement('li');
        newItem.className = "items";
        newItem.textContent = items;

        availableTasks.appendChild(newItem);

        inputValue.value = ''; // Clear the input field after adding the item
    }
});

availableTasks.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI' && getComputedStyle(event.target).getPropertyValue('content') !== 'none') {
        const listItem = event.target; // The clicked LI element itself
        listItem.remove();

        if (availableTasks.childElementCount === 0) {
            noTasks.style.display = 'flex';
        }
    }
});


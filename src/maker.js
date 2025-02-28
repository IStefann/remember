let tasks = [];
let categories = [];

function CreateTask(title, description, dateAdded, dateDue, priority, category, completed) {
    return {
        title,
        description,
        dateAdded, 
        dateDue, 
        priority, 
        category,
        completed
    }
};


function createCategory(name) {
    return {
        name
    }
};

function makeCategory(name) {
    categories.push(createCategory(name));
}

function makeTask(titleTemp, descTemp, dateAddedTemp, dateDueTemp, priorityTemp, categories) {
    tasks.push(CreateTask(titleTemp, descTemp, dateAddedTemp, dateDueTemp, priorityTemp, categories[0]));
}

export {makeCategory, makeTask, tasks, categories};
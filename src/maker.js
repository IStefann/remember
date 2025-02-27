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


function createCategory(name, imgPath) {
    return {
        name,
        imgPath
    }
};

function makeCategory(name, imgPath) {
    categories.push(createCategory(name, imgPath));
}

function makeTask(titleTemp, descTemp, dateAddedTemp, dateDueTemp, priorityTemp, categories) {
    tasks.push(CreateTask(titleTemp, descTemp, dateAddedTemp, dateDueTemp, priorityTemp, categories[0]));
}

export {makeCategory, makeTask, tasks,categories};
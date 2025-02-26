// class category {
//     constructor(name) {
//         this.name = name;
//     }
// }
let tasks = [];
let categories = [];

function CreateTask(title, description, dateAdded, dateDue, priority, category) {
    return {
        title,
        description,
        dateAdded, 
        dateDue, 
        priority, 
        category
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

// class TaskManager {
//     constructor() {
//         this.tasks = [];
//     }

//     addTask(task) {
//         this.tasks.push(task);
//     }

//     getTasksByCategory(category) {
//         return this.tasks.filter(task => task.category === category);
//     }
// }

// // function makeCategory(name){
// //     const name = new category(name);
// // }
// function makeTask(title, description, dateAdded, dueDate, priority, category) {
//     const taskManager = new TaskManager();
//     taskManager.addTask(new task(title, description, dateAdded, dueDate, priority, category));
// }
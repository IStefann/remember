// class category {
//     constructor(name) {
//         this.name = name;
//     }
// }

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


function createCategory(name) {
    return {
        name
    }
};

export {createCategory, CreateTask};

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
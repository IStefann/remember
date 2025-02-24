import "./style.css";

class task {
    constructor(title, description, dateAdded, dueDate, priority, category) {
        this.title = title;
        this.description = description;
        this.dateAdded = dateAdded;
        this.dueDate = dueDate;
        this.priority = priority
        this.category = category;
    }
}

class category {
    constructor(name)
    {
        this.name = name;
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    getTasksByCategory(category) {
        return this.tasks.filter(task => task.category === category);
    }
}

const taskManager = new TaskManager();
taskManager.addTask(new task("Task", "description", "1.1", "5.1", "Important!", null));
taskManager.addTask(new task("Task2", "description", "1.1", "5.1", "Important!", null));
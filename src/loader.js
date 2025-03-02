import { tasks, categories } from "./maker.js";

const notesContainer = document.querySelector("#notesContainer");
const categoriesContainer = document.querySelector("#categoryTabs");

function taskLoader(task){
    const note = document.createElement("div");
    const noteTitle = document.createElement("div");
    const checkBox = document.createElement("input");
    const paragraph = document.createElement("p");
    const noteDates = document.createElement("div");
    const dateAdded = document.createElement("div");
    const dateDue = document.createElement("div");

    note.classList.add("note");
    noteTitle.setAttribute("id", "noteTitle");
    Object.assign(checkBox, { id: "status", type: "checkbox" });
    paragraph.setAttribute("id", "noteContent");
    noteDates.classList.add("noteDates");
    dateAdded.setAttribute("id", "dateAdded");
    dateDue.setAttribute("id", "dateDue");

    note.append(noteTitle, paragraph, noteDates);
    noteTitle.textContent = task.title;
    noteTitle.appendChild(checkBox);
    noteDates.append(dateAdded, dateDue);
    notesContainer.appendChild(note);

    paragraph.textContent = task.description;
    dateAdded.innerHTML = `Date Added: <span>${task.dateAdded}</span>`;
    dateDue.innerHTML = `Due Date: <span>${task.dateDue}</span>`;

    switch (task.priority) {
        case 1: note.classList.add("lowPrio"); break;
        case 2: note.classList.add("midPrio"); break;
        case 3: note.classList.add("highPrio"); break;
        default: return;
    }
}

function loadCategories() {
    categoriesContainer.textContent = "";
    categories.forEach(category => {
        let counter = 0;
        const li = document.createElement("li");
        const number = document.createElement("div");
        number.classList.add("number");
        const name = document.createTextNode(category.name);
        tasks.forEach(task => {
           if(task.category === category.name)
            counter++;
        });
        number.textContent = counter;
        li.append(number,name);
        categoriesContainer.appendChild(li);
    });
}

function allTasksLoad() {
    notesContainer.textContent = "";
    tasks.forEach(task => {
        if (task.completed === 0) {
            taskLoader(task);
        }
    });
}

function loadToday(){
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();

    const today = `${year.toString()}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

    notesContainer.textContent = "";
    tasks.forEach(task => {
        if(task.dateDue === today && task.completed === 0)
        {
           taskLoader(task);
        }
    })
}

function categoriesLoad(){
    
}

export { allTasksLoad, loadCategories, loadToday }
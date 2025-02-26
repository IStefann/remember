import { tasks,categories } from "./maker.js";

const notesContainer = document.querySelector("#notesContainer");
const categoriesContainer = document.querySelector("#categories");

function loadTasks() {
    tasks.forEach(task => {
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
    });
}

function loadCategories() {
    categories.forEach(category => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.setAttribute("src", category.imgPath);
        li.appendChild(img);
        const name = document.createTextNode(category.name);
        li.appendChild(name);
        categoriesContainer.appendChild(li);
    });
}

export {loadCategories,loadTasks}
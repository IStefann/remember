import "./style.css";
import { CreateTask, createCategory } from "./maker.js";
import gymImg from "./assets/gym.svg";
import workImg from "./assets/work.svg";
import shoppingImg from "./assets/shopping.svg";

const notesContainer = document.querySelector("#notesContainer");
const categoriesContainer = document.querySelector("#categories");

let tasks = [];
let categories = [];

function makeCategory(name,imgPath){
    categories.push(createCategory(name,imgPath));
}

function makeTask(titleTemp, descTemp, dateAddedTemp, dateDueTemp, priorityTemp, categories){
    tasks.push(CreateTask(titleTemp, descTemp, dateAddedTemp, dateDueTemp, priorityTemp, categories[0]));
}

function loadTasks(tasks) {

    tasks.forEach(task => {
    const note = document.createElement("div");
    const noteTitle = document.createElement("div");
    const checkBox = document.createElement("input");
    const paragraph = document.createElement("p");
    const noteDates = document.createElement("div");
    const dateAdded = document.createElement("div");
    const dateDue = document.createElement("div");          
    
    note.classList.add("note");
    noteTitle.setAttribute("id","noteTitle");   
    Object.assign(checkBox, {id:"status", type:"checkbox"});
    paragraph.setAttribute("id", "noteContent");
    noteDates.classList.add("noteDates");
    dateAdded.setAttribute("id", "dateAdded");
    dateDue.setAttribute("id", "dateDue");

    note.append(noteTitle,paragraph,noteDates);
    noteTitle.textContent = task.title;
    noteTitle.appendChild(checkBox);
    noteDates.append(dateAdded,dateDue);
    notesContainer.appendChild(note);
    
    paragraph.textContent = task.description;
    dateAdded.innerHTML = `Date Added: <span>${task.dateAdded}</span>`;
    dateDue.innerHTML = `Due Date: <span>${task.dateDue}</span>`;

    switch(task.priority)
    {
        case 1: note.classList.add("lowPrio");break;
        case 2: note.classList.add("midPrio");break;
        case 3: note.classList.add("highPrio");break;
        default:return;
    }
    });
}

function loadCategories(categories)
{
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
makeCategory("Shopping", shoppingImg);
makeCategory("Work", workImg);
makeCategory("Gym", gymImg);
makeTask("Shopping", `Remember to buy: 
- Toilet paper, VERY IMPORTANT, tomorrow's a party night. Don't forget
- Bread
- Beer`, "1/1/25", "3/1/25", 3, categories[0]);
makeTask("Work", "Finish project proposal and send it to the team", "20/2/25", "27/2/25", 2, categories[1]);
makeTask("Exercise", "Go for a 30-minute run in the park", "25/2/25", "25/2/25", 1, categories[2]);
loadCategories(categories);
loadTasks(tasks);
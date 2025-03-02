import "./style.css";
import allTasksImg from "./assets/task.svg"

import { allTasksLoad, loadCategories, loadToday } from "./loader.js";
import { changeTitle } from "./containerTitle.js";
import { openCatModal, openNoteModal, submitCategory, submitTask, closeModal } from "./modals.js";
import { example } from "./exampleState.js";
import { deleteTask } from "./deleter.js"

example();
loadCategories();
allTasksLoad();

const taskButtons = document.querySelectorAll("#taskTabs>li");
const catModal = document.querySelector("#openCatModal");
let noteModal = document.querySelector("#newNote");
const submitCat = document.querySelector("#categoryForm");
const sbmitTask = document.querySelector("#noteForm");
const overlays = document.querySelectorAll(".overlay");

catModal.addEventListener("click", openCatModal);
noteModal.addEventListener("click", openNoteModal);
assignCheckboxEventListeners();
submitCat.addEventListener("submit", (e) => {
    e.preventDefault();
    submitCategory(submitCat);
    loadCategories()
});

sbmitTask.addEventListener("submit", (e) => {
    e.preventDefault();
    submitTask(sbmitTask);
    allTasksLoad();
    changeTitle("All Tasks", allTasksImg);
    loadCategories();
    noteModal = document.querySelector("#newNote");
    noteModal.addEventListener("click", openNoteModal); 
    assignCheckboxEventListeners();
});

document.addEventListener("click", (e) => {
    overlays.forEach(overlay => {
        if (e.target === overlay)
            closeModal();
    });
})


taskButtons.forEach(button => {
    button.addEventListener("click", () => {
        taskButtons.forEach(b => b.classList.remove("active"));
        button.classList.add("active");
        const imgPath = button.querySelector('img').src;
        changeTitle(button.textContent, imgPath);
        noteModal = document.querySelector("#newNote");
        noteModal.addEventListener("click", openNoteModal);
        switch (button.id) {
            case ("all"): allTasksLoad(); break;
            case ("today"): loadToday(); break;
            default: return;
        }
        assignCheckboxEventListeners();
    })
});


function assignCheckboxEventListeners() {
    let checkboxes = document.querySelectorAll("input[type=checkbox]");
    checkboxes.forEach((checkBox, index) => {
        checkBox.addEventListener("click", () => {
            deleteTask(index);
            loadCategories();
            checkboxes = document.querySelectorAll("input[type=checkbox]");
            assignCheckboxEventListeners();
        });
    });
}
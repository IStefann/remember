import "./style.css";
import allTasksImg from "./assets/task.svg"

import { allTasksLoad, loadCategories, loadToday } from "./loader.js";
import { changeTitle } from "./containerTitle.js";
import { openCatModal, openNoteModal, submitCategory, submitTask, closeModal } from "./modals.js";
import { example } from "./exampleState.js";

example();
loadCategories();
allTasksLoad();

const taskButtons = document.querySelectorAll("#taskTabs>li");
const categoryButtons = document.querySelectorAll("#categoryTabs>li");
const catModal = document.querySelector("#openCatModal");
let noteModal = document.querySelector("#newNote");
const submitCat = document.querySelector("#categoryForm");
const sbmitTask = document.querySelector("#noteForm");
const overlays = document.querySelectorAll(".overlay");

catModal.addEventListener("click", openCatModal);
noteModal.addEventListener("click", openNoteModal);
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
    })
});

categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.classList.contains("active")) {
            button.classList.remove("active");
            button.querySelector(".number").classList.remove("selectedNumber")
        }
        else {
            categoryButtons.forEach(b => { b.classList.remove("active"); b.querySelector(".number").classList.remove("selectedNumber") });
            button.classList.add("active");
            button.querySelector(".number").classList.add("selectedNumber");
        }
    })
});

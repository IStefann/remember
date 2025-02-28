import "./style.css";

import { allTasksLoad, loadCategories } from "./loader.js";
import { changeTitle } from "./containerTitle.js";
import { openCatModal, openNoteModal, submitCategory, submitTask, closeModal} from "./modals.js";
import { example } from "./exampleState.js";

example();
loadCategories();
allTasksLoad();

let open = 0;
const taskButtons = document.querySelectorAll("#taskTabs>li");
const categoryButtons = document.querySelectorAll("#categoryTabs>li");
const catModal = document.querySelector("#openCatModal");
const noteModal = document.querySelector("#newNote");
const submitCat = document.querySelector("#categoryForm");
const sbmitTask = document.querySelector("#noteForm");
const overlays = document.querySelectorAll(".overlay");

catModal.addEventListener("click", () => {openCatModal(); open = 1;});
noteModal.addEventListener("click", () => {openNoteModal(); open = 1;});
submitCat.addEventListener("submit", (e) => {
    e.preventDefault();
    submitCategory(submitCat);
    loadCategories()
});

sbmitTask.addEventListener("submit", (e) => {
    e.preventDefault();
    submitTask(sbmitTask);
    allTasksLoad()
});


document.addEventListener("click", (e) => {
    overlays.forEach(overlay => {
    if(e.target === overlay)
        closeModal();
    });
})


taskButtons.forEach(button => {
    button.addEventListener("click", () => {
        taskButtons.forEach(b => b.classList.remove("active"));
        button.classList.add("active");
        const imgPath = button.querySelector('img').src;
        changeTitle(button.textContent, imgPath);
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

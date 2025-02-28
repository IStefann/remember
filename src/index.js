import "./style.css";

import { makeCategory, makeTask, categories } from "./maker.js";
import { allTasksLoad } from "./allTasks.js";
import { changeTitle } from "./containerTitle.js";
import { loadCategories } from "./loadCategories.js";


makeCategory("Shopping");
makeCategory("Work");
makeCategory("Misc");

makeTask("Shopping", `Remember to buy: 
- Toilet paper, VERY IMPORTANT, tomorrow's a party night. Don't forget
- Bread
- Beer`, "1/1/25", "3/1/25", 3, categories[0], 0);
makeTask("Work", "Finish project proposal and send it to the team", "20/2/25", "27/2/25", 2, categories[1], 0);
makeTask("Doge", "Take doge out for a walk in the park", "25/2/25", "25/2/25", 1, categories[2], 0);
loadCategories();
allTasksLoad();

const taskButtons = document.querySelectorAll("#taskTabs>li");
const categoryButtons = document.querySelectorAll("#categoryTabs>li");
const catModal = document.querySelector("#openCatModal");

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
        if (button.classList.contains("active"))
        {
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
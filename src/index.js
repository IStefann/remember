import "./style.css";

import gymImg from "./assets/gym.svg";
import workImg from "./assets/work.svg";
import shoppingImg from "./assets/shopping.svg";

import { makeCategory, makeTask, categories, tasks} from "./maker.js";
import { loadCategories,loadTasks } from "./loader.js";
import { changeTitle } from "./containerTitle.js";


const buttons = document.querySelectorAll("#taskTabs>li");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("activeTask"));
        button.classList.add("activeTask");
        const imgPath = button.querySelector('img').src;
        changeTitle(button.textContent, imgPath);
    })
});

makeCategory("Shopping", shoppingImg);
makeCategory("Work", workImg);
makeCategory("Gym", gymImg);
makeTask("Shopping", `Remember to buy: 
- Toilet paper, VERY IMPORTANT, tomorrow's a party night. Don't forget
- Bread
- Beer`, "1/1/25", "3/1/25", 3, categories[0]);
makeTask("Work", "Finish project proposal and send it to the team", "20/2/25", "27/2/25", 2, categories[1]);
makeTask("Exercise", "Go for a 30-minute run in the park", "25/2/25", "25/2/25", 1, categories[2]);
loadCategories();
loadTasks();
import { categories } from "./maker.js";

const categoriesContainer = document.querySelector("#categoryTabs");

function loadCategories() {
    categories.forEach(category => {
        const li = document.createElement("li");
        const number = document.createElement("div");
        number.classList.add("number");
        const name = document.createTextNode(category.name);
        number.textContent = "1";
        li.append(number,name);
        categoriesContainer.appendChild(li);
    });
}

export {loadCategories};
import { categories } from "./maker.js";

const categoriesContainer = document.querySelector("#categoryTabs");

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

export {loadCategories};
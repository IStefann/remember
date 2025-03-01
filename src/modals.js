import { categories, makeCategory, makeTask } from "./maker";

const priorities = document.querySelectorAll(".prioSquare");
priorities.forEach(priority => {
    priority.addEventListener("click", () => {
        priorities.forEach(p => p.classList.remove("prioSquareSelected"));
        priority.classList.add("prioSquareSelected");
    })
});


function openCatModal() {
    const form = document.querySelector("#categoryForm");
    form.classList.remove("none");
}

function openNoteModal() {
    const form = document.querySelector("#noteForm");
    const selector = document.querySelector("#categorySelect");
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];
    document.getElementById('dueDateModal').setAttribute('min', formattedDate);
    form.classList.remove("none");
    selector.textContent = "";
    categories.forEach((category, index) => {
        const option = document.createElement("option");
        option.textContent = category.name;
        option.setAttribute("id", index)
        selector.appendChild(option);
    })
}

function closeModal() {
    document.querySelectorAll("form").forEach(form => form.classList.add("none"));
}

function submitCategory(form) {
    let exists = 0;
    const InputName = document.querySelector("#categoryName");
    const error = document.querySelector("#error");
    categories.forEach(category => {
        if (category.name === InputName.value) {
            error.classList.add("error");
            exists = 1;
            console.log(category.name + InputName.value)
        }
    });
    if (exists === 0) {
        form.classList.add("none");
        error.classList.remove("error")
        makeCategory(InputName.value);
        InputName.value = "";
    }
}

function submitTask(form) {
    const noteName = document.querySelector("#noteName").value;
    const noteContent = document.querySelector("#noteContentModal").value;
    let dueDate = document.querySelector("#dueDateModal").value;

    const currentDate = new Date();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();

    const formattedDate = `${year.toString()}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

    let selectedPrio;
    priorities.forEach(priority => {
        if (priority.classList.contains("prioSquareSelected"))
            selectedPrio = parseInt(priority.id);
    });

    const categorySelect = document.querySelector("#categorySelect");
    const selectedCategory = categorySelect.options[categorySelect.selectedIndex].id;

    if(dueDate == "")
        dueDate = formattedDate;
    makeTask(noteName, noteContent, formattedDate, dueDate, selectedPrio, categories[selectedCategory].name, 0);
    form.classList.add("none");
    form.querySelectorAll("input").forEach(i => i.value = "");
    document.querySelector("#noteContentModal").value = "";
}

export { openCatModal, openNoteModal, submitCategory, submitTask, closeModal };
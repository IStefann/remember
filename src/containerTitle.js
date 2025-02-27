import plusImage from "./assets/plus.svg"
const currentTab = document.querySelector("#currentTab");

function changeTitle(tabText, image) {
    const img = document.createElement("img");
    const plusImg = document.createElement("img");
    const btn = document.createElement("button");
    const div = document.createElement("div");

    btn.setAttribute("id", "newNote");
    Object.assign(plusImg,{src:plusImage, alr: "plus.svg"});
    Object.assign(img, { src: image, alt: "all.svg" });
    
    let text = document.createTextNode(tabText);
    currentTab.textContent = "";

    btn.appendChild(plusImg)
    div.append(img, text);
    currentTab.append(div, btn);

}

export { changeTitle };
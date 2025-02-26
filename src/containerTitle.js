const currentTab = document.querySelector("#currentTab");

function changeTitle(tabText, image) {
    const img = document.createElement("img");
    let text = document.createTextNode(tabText);
    Object.assign(img, { src: image, alt: "all.svg" });
    currentTab.textContent = "";
    currentTab.append(img, text);

}

export { changeTitle };
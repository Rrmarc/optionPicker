console.log("rashell did it");
let addBtnElement = document.getElementById("add-btn");
let inputValue = document.getElementById("option-input");
let choicesArray = [];

function addOption() {
    let container = document.getElementById("allOptions");

    let newListItem = document.createElement("li");
    newListItem.className = "li-option"
    container.appendChild(newListItem);


    let itemBox = document.createElement("div");
    itemBox.className = "item";
    newListItem.appendChild(itemBox);

    let text = document.createElement("p");
    text.innerHTML = inputValue.value;


    let deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.innerHTML = "x";
    itemBox.appendChild(deleteBtn);
    itemBox.appendChild(text);



    deleteBtn.addEventListener("click", function() {
        // console.log(deleteBtn.parentElement)
        let wordInArray = deleteBtn.parentElement.getElementsByTagName("p")[0].innerHTML
        let i = choicesArray.indexOf(wordInArray)
            // console.log(choicesArray)
        choicesArray.splice(i, 1)
            // console.log(choicesArray)

        deleteBtn.parentElement.parentElement.remove();
    });
}

addBtnElement.addEventListener("click", function() {
    choicesArray.push(inputValue.value);
    console.log(choicesArray);
    inputValue.value = "";
});
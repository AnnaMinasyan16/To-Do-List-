let input = document.getElementById("myInput");
let button = document.getElementById("myButton");
let divList = document.getElementById("list");

let allList = [];

function createElement() {
  divList.innerHTML = "";

  allList.forEach((el, index) => {
    let li = document.createElement("li");
    li.className = el.status ? "completed" : "";
    li.innerHTML = `
      <div class = "listItem" onClick="completed(${index})">  
        <div class = "item"> ${el.value} </div>
        <button class = "closeButton" onclick="remove(${index})"> &#9747; </button>
      </div>
    `;

    divList.appendChild(li);
  });
}

function completed(index) {
  allList[index].status = !allList[index].status;
  createElement();
}

function add() {
  let inputValue = input.value;

  if (inputValue !== "") {
    allList.push({ value: inputValue, status: false });
    input.value = "";
    createElement();
  } else {
    alert("write something");
  }
}

function remove(index) {
  allList.splice(index, 1);
  createElement();
}

button.addEventListener("click", add);

import "./App.css";

import richestPeople from "./richest-people"
const draggable_list = document.getElementById("draggable-list");
// const check = document.getElementById("check");


//store list items
const listItems = [];
let dragStartIndex;

//insert list items into document

function createList() {
  // .map((a) => ({ value: a, sort: Math.random() }))
  // .sort((a, b) => a.sort - b.sort)
  // .map((a) => a.value)
  // if i wanted to have it in different order everytime

  [...richestPeople]
    .forEach((person, index) => {
      const listItem = document.createElement("li");
      listItem.setAttribute("data-index", index);
      console.log(person);
      console.log(index);

      listItem.classList.add("right");

      let test = person.pose[0].toUpperCase()
      console.log(test);

      listItem.innerHTML = `
      <div class="draggable" draggable="true"> <br /> <br />
      <span class="number"> ${index}</span>        <h4 class="person-name">  ${person.type} </h4>

      <img src=${person.imgUrl} />
        <h2> ${test}${person.pose.slice(1,40)} </h2>
        <p> ${person.english} </p>
              <p> <b> Cues <br /> </b> ${person.cues} </p>
        <i class="fas fa-grip-lines"> </i>
      </div>
    `;

      listItems.push(listItem);
      draggable_list.appendChild(listItem);
    });

  addEventListeners();
}

function dragStart() {
  dragStartIndex = +this.closest("li").getAttribute("data-index");
  console.log(dragStartIndex);
  // console.log("event:", "dragstart")
}

function dragEnter() {
  this.classList.add("over");
  // console.log("event:", "dragenter")
}

function dragLeave() {
  this.classList.remove("over");

  // console.log("event:", "dragLeave")
}

function dragOver(e) {
  e.preventDefault();
  // console.log("event:", "dragOver")
}

function dragDrop() {
  const dragEndIndex = +this.getAttribute("data-index");
  swapItems(dragStartIndex, dragEndIndex);

  this.classList.remove("over");
  // console.log("event:", "drop")
}

function swapItems(fromIndex, toIndex) {
  console.log("to index",toIndex);
  console.log("from index",fromIndex)
  const itemOne = listItems[fromIndex].querySelector(".draggable");
  const itemTwo = listItems[toIndex].querySelector(".draggable");

  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}

function addEventListeners() {
  const draggables = document.querySelectorAll(".draggable");
  const dragListItems = document.querySelectorAll(".draggable-list li");

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", dragStart);
  });

  dragListItems.forEach((item) => {
    item.addEventListener("dragover", dragOver);
    item.addEventListener("drop", dragDrop);
    item.addEventListener("dragenter", dragEnter);
    item.addEventListener("dragleave", dragLeave);
  });
}
createList();

function App() {
  return <div className="App"></div>;
}

export default App;

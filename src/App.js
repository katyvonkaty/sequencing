import "./App.css";
import plank from "./assets/images/plank.png";
import downward from "./assets/images/downward.png";
import caturanga from "./assets/images/caturanga.png";
import utanasana from "./assets/images/utanasana.png";
import bhjungasana from "./assets/images/bhjungasana.png";
import lowlunge from "./assets/images/lowlunge.png";
import balasana from "./assets/images/balasana.png";

const draggable_list = document.getElementById("draggable-list");
// const check = document.getElementById("check");

// const richestPeople = [
//   "jeff bezois", "billgates", "bernard arnault", "larry page"
// ]
//

const richestPeople = [
  { pose: "plank",  imgUrl: `${plank}`, type:"puttering", english:"plank"},
  { pose: "utanasana", imgUrl: `${utanasana}`, type:"puttering", english:"childs pose" },
  { pose: "bhjuangasana", imgUrl: `${bhjungasana}`, type:"puttering", english:"cobra" },
  { pose: "lowlunge", imgUrl: `${lowlunge}` , type:"puttering", english:"low lunge"},
  { pose: "balasana",  imgUrl: `${balasana}`, type:"puttering", english:"childs pose"},
  { pose: "caturanga", imgUrl: `${caturanga}`, type:"puttering", english:"" },
  { pose: "plank",  imgUrl: `${plank}`, type:"puttering", english:"plank"},
  { pose: "utanasana", imgUrl: `${utanasana}`, type:"opening standing", english:"chair" },
  { pose: "downward dog", imgUrl: `${downward}`, type:"opening standing", english:"downward dog" },
  { pose: "lowlunge", imgUrl: `${lowlunge}` , type:"opening standing", english:"low lunge"},
  { pose: "balasana",  imgUrl: `${balasana}`, type:"puttering", english:"childs pose"},
  { pose: "caturanga", imgUrl: `${caturanga}`, type:"puttering", english:"caturanga"}
];

//store list items
const listItems = [];
let dragStartIndex;

//insert list items into document

function createList() {
  [...richestPeople]
    .map((a) => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
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

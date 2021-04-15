import logo from './logo.svg';
import './App.css';
import plank from "./assets/images/plank.png";
import downward from "./assets/images/downward.png";
import caturanga from "./assets/images/caturanga.png";
import utanasana from "./assets/images/utanasana.png";
import bhjungasana from "./assets/images/bhjungasana.png";
import lowlunge from "./assets/images/lowlunge.png";
import balasana from "./assets/images/balasana.png";

const draggable_list = document.getElementById("draggable-list")
const check = document.getElementById("check")



// const richestPeople = [
//   "jeff bezois", "billgates", "bernard arnault", "larry page"
// ]
//
const richestPeople = [
  {
    pose:"plank",
    imgUrl:`${plank}`},
  {pose:"plank",
    imgUrl:`${utanasana}`},
  {pose:"plank",
    imgUrl:`${bhjungasana}`},
  {pose:"plank",
    imgUrl:`${lowlunge}`},

]
//store list items
const listItems = []
let dragStartIndex;


//insert list items into document

function createList(){
  [...richestPeople]
  .map(a => ({value: a, sort:Math.random() }))
  .sort((a,b) => a.sort-b.sort)
  .map(a => a.value)
  .forEach((person,index) => {
    const listItem = document.createElement("li")
    listItem.setAttribute("data-index", index)
    console.log(person)

    listItem.classList.add("right")

    listItem.innerHTML = `
      <span class="number">${index + 1} </span>
      <div class="draggable" draggable="true">
        <p class="person-name"> ${person.pose} </p>
        <img src=${person.imgUrl} />


        <i class="fas fa-grip-lines"> </i>
      </div>
    `;

    listItems.push(listItem)
    draggable_list.appendChild(listItem)
  })

  addEventListeners()
}

function dragStart(){
  dragStartIndex = +this.closest("li").getAttribute("data-index")
  console.log(dragStartIndex)
  // console.log("event:", "dragstart")
}

function dragEnter(){
  this.classList.add("over");
  // console.log("event:", "dragenter")
}

function dragLeave(){
  this.classList.remove("over");

  // console.log("event:", "dragLeave")
}


function dragOver(e){
  e.preventDefault()
  // console.log("event:", "dragOver")
}

function dragDrop(){
  const dragEndIndex = +this.getAttribute("data-index")
  swapItems(dragStartIndex, dragEndIndex);

  this.classList.remove("over")
  // console.log("event:", "drop")
}

function swapItems(fromIndex, toIndex){
  const itemOne = listItems[fromIndex].querySelector(".draggable");
  const itemTwo = listItems[toIndex].querySelector(".draggable");

  listItems[fromIndex].appendChild(itemTwo)
  listItems[toIndex].appendChild(itemOne)



}



function addEventListeners(){
  const draggables = document.querySelectorAll(".draggable");
  const dragListItems = document.querySelectorAll(".draggable-list li")

  draggables.forEach(draggable => {
    draggable.addEventListener("dragstart", dragStart)
  })

  dragListItems.forEach(item => {
    item.addEventListener("dragover", dragOver)
    item.addEventListener("drop", dragDrop)
    item.addEventListener("dragenter", dragEnter)
    item.addEventListener("dragleave", dragLeave)

  })
}
createList()


function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;

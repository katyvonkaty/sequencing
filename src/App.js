import "./App.css";
import richestPeople from "./richest-people";

const cardsContainer = document.getElementById("cards-container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const currentEl = document.getElementById("current");
const showBtn = document.getElementById("show");
const hideBtn = document.getElementById("hide");
// const questionEl = document.getElementById("question");
const sanskirtEl = document.getElementById("sanskirt");
const answerEl = document.getElementById("answer");
const addCardBtn = document.getElementById("add-card");
// const addImageBtn = document.getElementById("add-image")
const cuesEl = document.getElementById("cues");

const clearBtn = document.getElementById("clear");
const loadFile = document.getElementById("loadFile");
const addImgBtn = document.getElementById("addImgBtn");

const addContainer = document.getElementById("add-container");
const draggable_list = document.getElementById("draggable-list");
// const check = document.getElementById("check");

//store list items
const listItems = [];
let dragStartIndex;

//insert list items into document

let currentActiveCard = 0;

// const cardsEl = [];
//REPLACE WITH WIthlist items

const cardsData = getCardsData();

function getCardsData() {
  const cards = JSON.parse(localStorage.getItem("cards"));
  return cards === null ? [] : cards;
}

function createCards() {
  cardsData.forEach((data, index) => {
    createCard(data, index);
  });
}

function createCard(data, index) {
  const card = document.createElement("li");
  card.classList.add("right");

  card.innerHTML = `
  <div class="draggable" draggable="true"> <br /> <br />
  <span class="number"> ${data.index}</span>


    <h2>${data.cues} </h2>
    <p> ${data.answer} </p>
    <p> <b> Cues <br /> </b> ${data.sanskirt} </p>
    <i class="fas fa-grip-lines"> </i>
  </div>
  `;

  //add to dom cards
  listItems.push(card);
  draggable_list.appendChild(card);

  console.log(listItems);
}

addCardBtn.addEventListener("click", () => {
  const sanskirt = sanskirtEl.value;
  const answer = answerEl.value;
  const cues = cuesEl.value;

  if (sanskirt.trim() && answer.trim()) {
    const newCard = { sanskirt, answer, cues };
    createCard(newCard);

    sanskirtEl.value = "";
    answerEl.value = "";
    cuesEl.value = "";

    addContainer.classList.remove("show");

    listItems.push(newCard);

    console.log(newCard);
    // setCardsData(cardsData);
  }
});

function createList() {
  [...richestPeople].forEach((person, index) => {
    const listItem = document.createElement("li");
    listItem.setAttribute("data-index", index);
    console.log(person);
    console.log(index);

    listItem.classList.add("right");

    let test = person.pose[0].toUpperCase();
    console.log(test);

    listItem.innerHTML = `
      <div class="draggable" draggable="true"> <br /> <br />
      <span class="number"> ${index}</span>        <h4 class="person-name">  ${
      person.type
    } </h4>

      <img src=${person.imgUrl} />
        <h2> ${test}${person.pose.slice(1, 40)} </h2>
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
  console.log("to index", toIndex);
  console.log("from index", fromIndex);
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
createCards();

function App() {
  return <div className="App"></div>;
}

export default App;

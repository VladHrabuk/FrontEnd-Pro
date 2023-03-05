let ul = document.querySelector("#ul");
let lastSelected = null;

ul.addEventListener("mousedown", function (e) {
  e.preventDefault();
});

ul.addEventListener("click", function (e) {
  if (e.target == this) {
    return false;
  }

  if (!e.ctrlKey) {
    clearSelected(this.children);
  }

  if (e.ctrlKey) {
    removeBacklight(e.target);
  } else {
    addSelected(e.target);
  }

  if (e.shiftKey) {
    let startIndex = 0;
    let endIndex = Array.from(ul.children).indexOf(e.target);

    if (lastSelected !== null) {
      startIndex = Array.from(ul.children).indexOf(lastSelected);
    }
    for (
      let i = Math.min(startIndex, endIndex);
      i <= Math.max(startIndex, endIndex);
      i++
    ) {
      let currentItem = ul.children[i];
      if (
        (i >= startIndex && i <= endIndex) ||
        (i >= endIndex && i <= startIndex)
      ) {
        currentItem.classList.add("selected");
      }
    }
    lastSelected = e.target;
  }
});

function clearSelected(elems) {
  for (let elem of elems) {
    elem.classList.remove("selected");
  }
}

function addSelected(target) {
  target.classList.add("selected");
}

function removeBacklight(target) {
  target.classList.toggle("selected");
}

let menu = document.querySelector("#menu");

menu.addEventListener("click", function (e) {
  if (e.target.classList.contains("add-prepend")) {
    ul.prepend(createElement());
  } else if (e.target.classList.contains("add-append")) {
    ul.append(createElement());
  } else if (e.target.classList.contains("delete-case")) {
    ul.querySelectorAll(".selected").forEach((selected) => selected.remove());
  } else {
    ul.querySelectorAll(".selected").forEach((selected) =>
      ul.prepend(selected)
    );
  }
});

let listOfActions = [
  "Піти гуляти",
  "Поприбирати",
  "Повчитися",
  "Позайматися спортом",
  "Приготувати їсти",
  "Попрасувати одяг",
  "Відпочити",
  "Розважитися",
];

function getRandom(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
function createElement() {
  let newItem = document.createElement("li");
  newItem.textContent = getRandom(listOfActions);
  return newItem;
}

function manipulateTheList() {
  const elementsOfDrinks = document.querySelectorAll("#drinks-list li");
  const arrayOfDrinks = Array.from(elementsOfDrinks).map(
    (li) => li.textContent
  );
  const uniqueSortedArray = sortUniqueArray(arrayOfDrinks);
  console.log(uniqueArray);

  const listOfDrinks = document.querySelector("#drinks-list");
  listOfDrinks.innerHTML = "";

  uniqueSortedArray.forEach((content) => {
    const elementOfList = document.createElement("li");
    elementOfList.textContent = content;
    listOfDrinks.append(elementOfList);
  });
}

function sortUniqueArray(array) {
  let sortedArray = [];
  array.filter((element) => {
    if (!sortedArray.includes(element)) sortedArray.push(element);
  });
  return sortedArray.sort();
}

manipulateTheList();

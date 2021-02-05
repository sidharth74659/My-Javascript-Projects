const form = document.querySelector(".form");
const color_list = document.querySelector(".color-list");
const colorArray = JSON.parse(localStorage.getItem("colorArray")) || [];
const input = document.querySelector(".input");

// Step 01 :  loads existing Colors from localStorage or loads none on StartUp
populateList(colorArray, color_list);

// Step 02 (on-clicking 'add'):  add item to Display and to localStorage
form.addEventListener("submit", addColor);

function addColor(event) {
  // console.log(this)
  event.preventDefault();
  const colorName = input.value;
  const item = { colorName };
  //TODO: for color-names: validateColor(colorName);
  colorArray.push(item);
  populateList(colorArray, color_list);
  localStorage.setItem("colorArray", JSON.stringify(colorArray));
  form.reset();
}

function populateList(colorArray, list) {
  const uniqueColors = getUniqueListBy(colorArray, "colorName");

  list.innerHTML = uniqueColors
    .map((color, i) => {
      return `
      <li class="color-item"  style="background:${color.colorName}">
          <input type="text" data-index=${i} class="color__text" readonly value="${color.colorName}">
        </li>
       `;
    })
    .join("");
}

// Found in stackoverflow https://stackoverflow.com/questions/2218999/remove-duplicates-from-an-array-of-objects-in-javascript#answer-56768137:~:text=function%3A-,function%20getUniqueListBy(arr%2C%20key)%20%7B,%7D

function getUniqueListBy(arr, key) {
  return [...new Map(arr.map((item) => [item[key], item])).values()];
}

//TODO :  function validateColor(colorName) {}
//TODO :Alert the copied text
function copyColor(index) {
  // let copyText = document.querySelector(`[data-index='${index}']`);
  // copyText.select();
  // document.execCommand("copy");
  let copyText = document.querySelector(`[data-index='${index}']`);
  // console.log(copyText);
  copyText.select();
  document.execCommand("copy");

  copied.classList.toggle("is-copied");
  setTimeout(() => copied.classList.remove("is-copied"), 1000);
}

const copied = document.querySelector(".copied");
// const color__block = document.querySelector(".color__box");
color_list.addEventListener("click", function (e) {
  // console.log(e.target.parentNode.childNodes[3].attributes[1]);
  // console.log(e.target.parentNode.children[1].children[0]);
  // console.log(e.target.children[0].dataset.index);
  if (!e.target.matches("li")) return;

  //e.target.nextSibling Doesn't work ?

  const index = e.target.children[0].dataset.index;
  copyColor(index);
});

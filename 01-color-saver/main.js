const form = document.querySelector(".form");
const list = document.querySelector(".list");
const colorArray = JSON.parse(localStorage.getItem("colorArray")) || [];
const input = document.querySelector(".input");
// loads existing Colors from localStorage or loads none
populateList(colorArray, list);

function addItem(e) {
  e.preventDefault();
  const colorName = input.value;
  const item = { colorName };
  //TODO: for color-names: validateColor(colorName);
  colorArray.push(item);
  populateList(colorArray, list);
  localStorage.setItem("colorArray", JSON.stringify(colorArray));
  form.reset();
}

function populateList(colorArray, list) {
  const uniqueColors = getUniqueListBy(colorArray, "colorName");

  list.innerHTML = uniqueColors
    .map((color, i) => {
      return `
       <div class="color__block">
          <span style="background:${color.colorName}" class="color__box">
         
          </span>
          
          <input type="text" data-index=${i} class="color__text" value="${color.colorName}" >
        </div>`;
    })
    .join("");
}

form.addEventListener("submit", addItem);
// Found in stackoverflow https://stackoverflow.com/questions/2218999/remove-duplicates-from-an-array-of-objects-in-javascript#answer-56768137:~:text=function%3A-,function%20getUniqueListBy(arr%2C%20key)%20%7B,%7D

function getUniqueListBy(arr, key) {
  return [...new Map(arr.map((item) => [item[key], item])).values()];
}

//TODO :  function validateColor(colorName) {}
  //TODO :Alert the copied text 
function copyColor(index) {
  let copyText = document.querySelector(`[data-index='${index}']`);
  copyText.select();
  document.execCommand("copy");


}

const color__block = document.querySelector(".color__box");
list.addEventListener("click", function (e) {
  if (!e.target.matches("span")) return;
  //Doesn't work:?:  console.log(e.target.nextSibling);
  // console.log(e.target.parentNode.childNodes[3].attributes[1]);
  const index = e.target.parentNode.children[1].dataset.index
  copyColor(index);

});

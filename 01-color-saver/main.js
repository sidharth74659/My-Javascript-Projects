const form = document.querySelector(".form");
 const list = document.querySelector(".list");
 const colorArray = JSON.parse(localStorage.getItem("colorArray")) || [];
 const input = document.querySelector(".input");


populateList(colorArray, list);

 function addItem(e) {
   e.preventDefault();
   const colorName = input.value;
   const item = { colorName,};
   validateColor(colorName);
   colorArray.push(item);
   populateList(colorArray, list);
   localStorage.setItem("colorArray", JSON.stringify(colorArray));
   form.reset();
 }

function populateList(colorArray, list) {
  const uniqueColors = getUniqueListBy(colorArray, "colorName");

  list.innerHTML = uniqueColors.map((color, i) => {
       return `
       <div class="color__block">
          <div style="background:${color.colorName}" class="color__box">
          <i class="fas fa-copy"></i>
          </div>
          
          <div class="color__text">${color.colorName}</div>
        </div>`;
     })
     .join("");
}

form.addEventListener("submit", addItem);

// Found in stackoverflow https://stackoverflow.com/questions/2218999/remove-duplicates-from-an-array-of-objects-in-javascript#answer-56768137:~:text=function%3A-,function%20getUniqueListBy(arr%2C%20key)%20%7B,%7D

function getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()]
}

function validateColor(colorName) {
 
}
function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}


console.log()
const input = document.querySelector(".input");
const list = document.querySelector(".list");
const form = document.querySelector(".add");
const colorArray = [localStorage.getItem("colors")] || [];

loadHTML(colorArray);

form.addEventListener("submit", addColor);

function addColor(e) {
  // prevent page from reload

  e.preventDefault();

  const input__value = input.value;
  // console.log(colorArray)
  colorArray.push(input__value);
  localStorage.setItem("colors", colorArray);

  // loadHTML
  loadHTML(colorArray);
  // clear the form field
  form.reset();
}

function loadHTML(colorArray) {
  list.innerHTML = "";
  console.log(colorArray);

  colorArray.forEach((c) => {
    list.innerHTML += `<div class="color__block">
      <div style="background:${c}" class="color__box"></div>
      <div class="color__text">${c}</div>
      </div>`;
  });
}




// const input = document.querySelector(".input");
// const list = document.querySelector(".list");
// const form = document.querySelector(".add");
// const colorArray = JSON.parse(localStorage.getItem("colors")) || [];

// loadHTML(colorArray);

// form.addEventListener("submit", addColor);

// function addColor(e) {
//   // prevent page from reload

//   e.preventDefault();

//   const input__value = input.value;
//   let color = {
//     color: input__value,
//   };
//   // push the color to a localBucket(array)
//   colorArray.push(color);
//   // send that array to localStorage
//   localStorage.setItem("colors", JSON.stringify(colorArray));

//   // loadHTML
//   loadHTML(colorArray);
//   // clear the form field
//   form.reset();
// }

// function loadHTML(colorArray) {
//   list.innerHTML = "";
//   console.log(colorArray)
  
  
//     colorArray.filter(Boolean).forEach((c) => {
//       list.innerHTML += `<div class="color__block">
//       <div style="background:${c.color}" class="color__box"></div>
//       <div class="color__text">${c.color}</div>
//       </div>`;
//     });
// }

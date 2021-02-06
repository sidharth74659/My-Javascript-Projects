//TODO: for color-names: validateColor(colorName);


const form = document.querySelector(".form");
const input = document.querySelector(".input");
const color_list = document.querySelector(".color-list");
const colorArray = JSON.parse(localStorage.getItem("colorArray")) || [];
const copied = document.querySelector(".copied");

// Step 01 :  loads existing Colors from localStorage or loads none on StartUp
populateList(colorArray, color_list);

// Step 02 (on-clicking 'add'):  add item on Display and to localStorage
form.addEventListener("submit", addColor);

// Step 03 (on-hover and 'click'):  copy colorCode of that item
color_list.addEventListener("click", copyColor)	// Event Delegation

function addColor(event) {
	event.preventDefault(); //prevent form from refreshing
	// const colorName = input.value;  
	const color = { colorValue: input.value };  //store colorValue 
	colorArray.push(color);   //update colorArray with the latest color
	localStorage.setItem("colorArray", JSON.stringify(colorArray)); //update localStorage with latest color 
	populateList(colorArray, color_list); //update the color onto Display
	form.reset();
}

function populateList(colorArray, list) {
	// filter colors that have same values
	const uniqueColors = getUniqueListBy(colorArray, "colorValue");

	// load the page with colors that are filtered from localStorage 
	list.innerHTML = uniqueColors
		.map((color, i) => {
			return `
				  <li class="color-item"  style="background:${color.colorValue}">
				  <input type="text" data-index=${i} class="color__text" readonly value="${color.colorValue}">
				</li>
       `;
		})
		.join("");
}

function copyColor(eventObj) {
	// check if the user clicked one of the children 
	if (!eventObj.target.matches("li")) return;

	//Why: e.target.nextSibling Doesn't work ?

	// select the user-clicked element and copy its value using its unique data-index value
	let copyText = document.querySelector(`[data-index='${getColorIndex(eventObj)}']`);
	copyText.select();
	document.execCommand("copy");
	// notify-user wwith a pop-up

	// clearTimeout(timeOut);
	copied.classList.toggle("is-copied");
	let timeOut = setTimeout(() => copied.classList.remove("is-copied"), 2000);
}

// Found in stackoverflow https://stackoverflow.com/questions/2218999/remove-duplicates-from-an-array-of-objects-in-javascript#answer-56768137:~:text=function%3A-,function%20getUniqueListBy(arr%2C%20key)%20%7B,%7D
function getUniqueListBy(arr, key) {
	return [...new Map(arr.map((item) => [item[key], item])).values()];
}

// picks up the data-index of the element the user-clicked
function getColorIndex(e) {
	return e.target.children[0].dataset.index
}
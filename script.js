// * ========= Task 1.0 =========
// Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector("main");
console.log(mainEl);

// * ========= Task 1.1 =========
/**
 *  Set the background color of mainEl to the value stored in the
 * --main-bgCSS custom property.
 * 
 * Hint: Assign a string that uses the CSS var()function 
 * like this: 'var(--main-bg)'

**/
mainEl.style.backgroundColor = "var(--main-bg)";

// * ========= Task 1.2 =========
// Set the content of mainEl to <h1>SEI Rocks!</h1>.

// Create an H1 element
const h1Element = document.createElement("h1");
h1Element.textContent = "SEI Rocks!";

// Append the H1 element to the target element
mainEl.appendChild(h1Element);

// * ========= Task 1.3 =========
// Add a class of flex-ctr to mainEl.
mainEl.classList.add("flex-ctr");

// ** Progress Check **

// * ========= Task 2.0 =========
// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.querySelector("#top-menu");
console.log(topMenuEl);

// * ========= Task 2.1 =========
// Set the height topMenuEl element to be 100%.
topMenuEl.style.height = "100%";

// * ========= Task 2.2 =========
// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// * ========= Task 2.3 =========
// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");

// ** Progress Check **

// * ========= Task 3.0 =========
// Copy the following data structure to the top of script.js:
// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

// * ========= Task 3.1 =========
/** Iterate over the entire menuLinks array and for each "link" object:
 *
 * Create an <a>element.
 *
 * On the new element, add an href attribute with its value set to the
 * href property of the "link" object
 *
 * Set the new element's content to the value of the text property of
 * the "link" object.
 *
 * Append the new element to the topMenuEl element
 *
 * */

for (let link of menuLinks) {
  const menu = document.createElement("a");
  menu.setAttribute("href", link.href);
  menu.innerHTML = link.text;
  topMenuEl.append(menu);
}

// *** DONE ***

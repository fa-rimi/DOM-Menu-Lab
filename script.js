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
// Copy the following data structure to the top of script.js: v1
// Menu data structure
// var menuLinks = [
//   { text: "about", href: "/about" },
//   { text: "catalog", href: "/catalog" },
//   { text: "orders", href: "/orders" },
//   { text: "account", href: "/account" },
// ];

var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
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

// * ========= Task 4.0 =========
// Select and cache the <nav id="sub-menu">element in a variable named subMenuEl.
const subMenuEl = document.querySelector("#sub-menu");
// * ========= Task 4.1 =========
// Set the height subMenuEl element to be 100%.
subMenuEl.style.height = "100%";

// * ========= Task 4.2 =========
// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
console.log(subMenuEl);

// * ========= Task 4.3 =========
// Add the class of flex-around to the subMenuEl element
subMenuEl.classList.add("flex-around");

// ** Progress Check **

// * ========= Task 4.4 =========
// Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = "absolute";

// * ========= Task 4.5 =========
// Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = "0";

// * ========= Task 5.0 =========
// Update the menuLinks array in script.js (done above)
console.log(subMenuEl);

// * ========= Task 5.1 =========
/**
 * Select and cache the all of the <a>elements inside of topMenuEl in a
 * variable named topMenuLinks.
 *
 * Declare a global showing SubMenu variable and initialize it to false;
 */

// * ========= Task 5.2 =========
/**
 * Attach a delegated 'click' event listener to topMenuEl.
 *
 * The first line of code of the event listener function should call
 * the event object's preventDefault()method.
 *
 * The second line of code function should immediately return if the
 * element clicked was not an <a>element.
 *
 * console.log the content of the <a>to verify the handler is working.
 *
 */

// ** Progress Check **

// * ========= Task 5.3 =========

// * ========= Task 5.4 =========

// Question 1:
// In your own words what will this point to and why?
// (Note this is the global scope)
//console.log(this);
// Answer:
// This will point to the global object, which is the window object in the browser.



// Question 2:
// a. In your own words what will this point to and why?
// b. How can you fix this code?
// const myObj = {
// name: "Timmy",
// // greet: () => {
// // console.log(`Hello ${this.name}`);
// // },
// greet: function() {
//     console.log(`Hello ${this.name}`);
//     },
// };
// myObj.greet();
// Answer:
// because the arrow fuction wont grab the this keyword
// we can fix it by using a normal function 




// Question 3:
// In your own words what will this point to and why?
// const myFuncDec = function () {
// console.log(this);
// };
// Answer:
// nothing because function its not called 




// Question 4:
// In your own words what will this point to and why?
// const myFuncArrow = () => {
// console.log(this);
// };
// myFuncArrow();
//This will point to the global object, which is the window object in the browser,
//because the only object for 'this' to grab on-to in our global scope is the window object.




// Question 5:
// a. In your own words, what will this point to and why?
// b. How can you fix this code?
// document.querySelector(".element").addEventListener(() => {
document.querySelector(".element").addEventListener("click", function() {
    console.log(this);
});
// Answer:
// the eventListener doesn't know which event to look for we should add the event type like click or mouseover 
// the code will not work because the arrow function we need to use a normal function

// element selectors = methods used to target and manipulate html elements
//                     They allow you to select one or multiple Elements from DOM

// document.getElementById()          = Element or Null
// document.getElementsByClassName()  = HTML collection
// document.getElementsByTagName()    = HTML collection
// document.querySelector()           = First element or null
// document.querySelectorAll()        = NODELIST

const heading = document.getElementById("heading");
const fruits = document.getElementsByClassName("fruits"); // arrray-like structure iterable
const paragraphs = document.getElementsByTagName("p"); // all p tags
const firstFruit = document.querySelector(".fruits");
const allFruits = document.querySelectorAll(".fruits");
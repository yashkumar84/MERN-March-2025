// p
// div
// span
// input
// br
// b
// a
// header
// footer
// hr
// img
// label
// legend
// fieldset
// form
// button
// li
// ul
// table
// tr
// td
// th
// section
// aside
// h1 - h6
// iframe
// ol
// meter
// meta
// nav
// script
// link
// textarea
// audio
// video
// i
// u
// embed

let count = 0;
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const text = document.getElementById("text");

const printText = () => {
  text.innerText = count;
};

const add = () => {
  count = count + 1;
  console.log(count, "Plus");
  printText();
};

const sub = () => {
  if (count > 0) {
    count = count - 1;
  }
  console.log(count, "Minus");
  printText();
};

printText();
plus.addEventListener("click", add);
minus.addEventListener("click", sub);

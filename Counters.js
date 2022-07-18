/** @format */

let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
// console.log(btns);

btns.forEach(function (item) {
  //   console.log(item);
  item.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    // console.log(e.currentTarget.classList);
    if (styles.contains("decrease")) {
      //   console.log("yes");
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    // console.log(count);
    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else if (count === 0) {
      value.style.color = "black";
    }
    value.innerHTML = count;
  });
});

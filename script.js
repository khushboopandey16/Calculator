let initial = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((values) => {
  //console.log(buttons);
  values.addEventListener("click", (event) => {
    // console.log(event.target);
    if (event.target.innerHTML == "=") {
      initial = eval(initial);
      document.querySelector("input").value = initial;
    } else if (event.target.innerHTML == "C") {
      initial = "";
      document.querySelector("input").value = initial;
    } else {
      initial = initial + event.target.innerHTML;
      document.querySelector("input").value = initial;
    }
  });
});

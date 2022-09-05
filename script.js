btnsToDisplay = document.querySelectorAll("button:not(#clear, #equal)");
clearBtn = document.querySelector("#clear");
equalBtn = document.querySelector("#equal");
display = document.querySelector(".display");
btnsToDisplay.forEach((button) => {
  button.addEventListener("click", () => {
    display.innerHTML += button.innerHTML;
  });
});
clearBtn.addEventListener("click", () => {
  display.innerHTML = "";
});
equalBtn.addEventListener("click", () => {
  let result = eval(
    display.innerHTML.replaceAll(/×/g, "*").replaceAll(/÷/g, "/")
  );
  display.innerHTML = isNaN(result) ? "Syntax Error" : result;
});

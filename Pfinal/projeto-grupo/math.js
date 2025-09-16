const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let current = "";

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if(value === "C"){
      current = "";
      display.textContent = "0";
    }
    else if(value === "="){
      try {
        current = eval(current).toString();
        display.textContent = current;
      } catch {
        display.textContent = "Erro";
      }
    }
    else {
      current += value;
      display.textContent = current;
    }
  });
});

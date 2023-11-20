function addNumbers(first, second) {
  return parseInt(first) + parseInt(second);
}

function subtractNumbers(first, second) {
  return parseInt(first) - parseInt(second);
}

window.onload = function () {
  const form = document.getElementById("form");
  const add = document.getElementById("add");
  const minus = document.getElementById("minus");
  const ressultContainer = document.getElementById("result");

  let operation = "";
  let result = "";
  add.addEventListener("click", function () {
    operation = "add";
  });

  minus.addEventListener("click", function () {
    operation = "minus";
  });

  form.onsubmit = function fun(e) {
    e.preventDefault();
    const time = form.elements["time"].value;
    const initialHour = time.split(":")[0];
    const initialMinute = time.split(":")[1];

    const hour = form.elements["hour"].value;
    const minute = form.elements["minute"].value;

    if (operation === "add") {
      result = addNumbers(initialHour, hour);
      result = result + ":" + addNumbers(initialMinute, minute);
    }
    if (operation === "minus") {
      result = subtractNumbers(initialHour, hour);
      result = result + ":" + subtractNumbers(initialMinute, minute);
    }

    ressultContainer.innerText = result;
  };
};

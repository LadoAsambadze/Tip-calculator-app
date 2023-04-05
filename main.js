const bill = document.querySelector(".write-number");
const custom = document.querySelector(".input-percent");
const quantity = document.querySelector(".people-input");
const tipAmount = document.querySelector(".final-person-answer");
const totalAmount = document.querySelector(".final");
const errorMessage = document.querySelector(".error-message");
const resetAll = document.querySelector(".reset");
const percentClick = document.querySelectorAll(".percent");
const sayError = document.querySelector(".error");
const peopleText = document.querySelector(".number-people");
let percent = 10;
let tip;
const percentAll = document.querySelectorAll(".for-all");

tipAmount.textContent = "$0.00";
totalAmount.textContent = "$0.00";

percentClick.forEach((btn) => {
  if (btn.value === "10") {
    btn.classList.add("active");
  }
  btn.addEventListener("click", (event) => {
    percentClick.forEach((tipBtn) => {
      tipBtn.classList.remove("active");
      custom.classList.remove("active");
    });
    event.target.classList.add("active");
    percent = btn.value;

    if (event.target.classList.contains("active")) {
      tip = (bill.value * Number(percent)) / 100;
      let tipPerson = tip / quantity.value;
      tipAmount.textContent = "$" + tipPerson.toFixed(2);
      tip = (bill.value * Number(percent)) / 100;
      let totalCost = (tip + Number(bill.value)) / quantity.value;
      totalAmount.textContent = "$" + totalCost.toFixed(2);
      impossible();
    }
  });
});

custom.addEventListener("click", function () {
  percentClick.forEach((btn) => {
    btn.classList.remove("active");
    custom.classList.add("active");
    custom.classList.add("try");
  });
});

function calculateTip() {
  tip = (bill.value * percent) / 100 / quantity.value;

  tipAmount.textContent = "$" + tip.toFixed(2);
  impossible();
}

function calculateTotal() {
  tip = (bill.value * percent) / 100;
  let totalCost = (tip + Number(bill.value)) / quantity.value;
  totalAmount.textContent = "$" + totalCost.toFixed(2);
  impossible();
}

function reset() {
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
  bill.value = "";
  custom.value = "";
  quantity.value = "";
  quantity.style.border = "none";
}

function removeActive() {
  percentClick.classList.remove("active");
}

const inputs = [bill, quantity];
const functions = [calculateTip, calculateTotal];

inputs.forEach((input) => {
  functions.forEach((func) => {
    input.addEventListener("input", func);
  });
});

resetAll.addEventListener("click", reset);

function impossible() {
  if (quantity.value <= 0) {
    tipAmount.textContent = "$0.00";
    totalAmount.textContent = "$0.00";
    quantity.style.border = "2px solid red";
    sayError.style.display = "block";
    peopleText.style.display = "none";
  } else {
    sayError.style.display = "none";
    peopleText.style.display = "block";
    quantity.style.border = "2px solid black";
  }
}

custom.addEventListener("input", function () {
  percent = custom.value;
  calculateTip();
  calculateTotal();
});

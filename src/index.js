import "./css/style.css"; //importing css

const modal = document.getElementById("myModal");

const showModal = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("block");
  }, 1000 * 60);
});

const getModal = async () => {
  let result = await showModal;
  modal.style.display = result;
};

getModal();

modal.addEventListener("click", () => {
  modal.style.display = "none";
});

//animation2:
//selecting the button
const continueButton = document.getElementById("continue");

// creating a function that returns the promise:
const buttonPromise = () => {
  return new Promise((resolve) => {
    continueButton.addEventListener("animationend", () => {
      // the className is to add the style from bootstrap
      resolve({ className: "btn-info", alertMsg: "Continue to subscription!" });
    });
  });
};

// the event handler that resolves the previous promise:
const mouseOverHandler = async () => {
  const result = await buttonPromise(); // coming from resolve {className: "btn-info", alertMsg: "Continue to subscription!"}
  continueButton.classList.add(result.className);
  alert(result.alertMsg);
};

// the event listener:
continueButton.addEventListener("mouseover", mouseOverHandler);

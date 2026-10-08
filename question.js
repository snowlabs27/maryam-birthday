const questionMessage = document.querySelector("#question-message");
const noButton = document.querySelector("#no-button");

const noMessages = [
  "I think you do",
  "I'm going to cry!!!",
  "Well now you don't have a choice",
];

let noClickCount = 0;

noButton.addEventListener("click", () => {
  const message = noMessages[noClickCount];
  questionMessage.textContent = message;
  noClickCount += 1;

  if (noClickCount === noMessages.length) {
    noButton.remove();
  }
});

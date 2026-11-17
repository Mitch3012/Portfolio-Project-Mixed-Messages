let firstPartOfMessage = ["I", "You", "We"];
let secondPartOfMessage = ["can", "will", "must"];
let thirdPartOfMessage = ["succeed!", "keep learning.", "never give up."];
let previousMessages = [];
let isComplete = false;

function randomization() {
  let ramdonFirstPart = Math.floor(Math.random() * firstPartOfMessage.length);
  let ramdonSecondPart = Math.floor(Math.random() * secondPartOfMessage.length);
  let ramdonThirdPart = Math.floor(Math.random() * thirdPartOfMessage.length);
  let message = [];
  message.push(firstPartOfMessage[ramdonFirstPart]);
  message.push(secondPartOfMessage[ramdonSecondPart]);
  message.push(thirdPartOfMessage[ramdonThirdPart]);
  return message.join(" ");
}

function findDuplicates() {
  if (previousMessages.length === 27) {
    isComplete = true;
    click.textContent = "Start Again";
    return "You've reached the end of the messages!";
  }
  let message = randomization();

  while (previousMessages.includes(message)) {
    message = randomization();
  }
  previousMessages.push(message);
  console.log(message);
  console.log(previousMessages.length);
  return message;
}

const click = document.getElementById("click");
const messageElement = document.getElementById("message");
click.addEventListener("click", function () {
  if (isComplete) {
    previousMessages.length = 0;
    isComplete = false;
    click.textContent = "Generate Message";
    messageElement.hidden = true;
    return;
  }
  const message = findDuplicates();
  messageElement.textContent = message;
  messageElement.hidden = false;
});

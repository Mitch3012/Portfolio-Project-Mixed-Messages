let firstPartOfMessage = ["I", "You", "We"];
let secondPartOfMessage = ["can", "will", "must"];
let thirdPartOfMessage = ["succeed!", "keep learning.", "never give up."];
let previousMessages = [];

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
    console.log("You've reached the end of the messages!");
    return;
  }
  let message = randomization();

  while (previousMessages.includes(message)) {
    message = randomization();
  }
  previousMessages.push(message);
  console.log(message);
  console.log(previousMessages.length);
}

findDuplicates();

module.exports = { randomization };

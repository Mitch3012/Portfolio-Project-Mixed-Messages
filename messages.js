let firstPartOfMessage = ["I", "You", "We"];
let secondPartOfMessage = ["can", "will", "must"];
let thirdPartOfMessage = ["succeed", "keep learning", "never give up"];

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
console.log(randomization());
console.log(randomization());
console.log(randomization());
module.exports = { randomization };

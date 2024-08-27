document.addEventListener("DOMContentLoaded", function () {
  const textBox = document.getElementById("textBox");
  const messages = [
    "Hello, how can I assist you today?",
    "Sure, I can help with that.",
    "Let me find that information for you.",
    "Here is the result of your query.",
  ];
  let currentMessageIndex = 0;
  let currentCharIndex = 0;
  function typeCharacter() {
    if (currentCharIndex < messages[currentMessageIndex].length) {
      textBox.textContent +=
        messages[currentMessageIndex].charAt(currentCharIndex);
      currentCharIndex++;
      setTimeout(typeCharacter, 10);
    } else {
      currentCharIndex = 0;
      currentMessageIndex++;
      if (currentMessageIndex < messages.length) {
        textBox.innerHTML += "<br>";
        setTimeout(typeCharacter, 10);
      }
    }
  }
  // Simulate receiving messages from an API
  function receiveMessages() {
    setTimeout(() => {
      typeCharacter();
    }, 1000);
  }
  receiveMessages();
});

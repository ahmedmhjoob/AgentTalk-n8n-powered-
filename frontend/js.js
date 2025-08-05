document.addEventListener("DOMContentLoaded", () => {
  const userInput = document.getElementById("user-input");
  const sendButton = document.getElementById("send-button");
  const chatMessages = document.getElementById("chat-messages");
  const typingIndicator = document.getElementById("typing-indicator");

  // Function to add a message to the chat
  const addMessage = (sender, message) => {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", `${sender}-message`);

    if (sender === "user") {
      messageElement.innerHTML = `
        <div class="message-content">
          <p>${message}</p>
          <span class="message-time">${getCurrentTime()}</span>
        </div>
        <div class="message-avatar">
          <i class="fas fa-user"></i>
        </div>
      `;
    } else {
      messageElement.innerHTML = `
        <div class="message-avatar">
          <i class="fas fa-robot"></i>
        </div>
        <div class="message-content">
          <p>${message}</p>
          <span class="message-time">${getCurrentTime()}</span>
        </div>
      `;
    }

    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  };

  // Function to get current time in HH:MM AM/PM format
  const getCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    return `${hours}:${minutes} ${ampm}`;
  };

  // Function to show/hide typing indicator
  const setTyping = (isTyping) => {
    typingIndicator.style.display = isTyping ? "flex" : "none";
    chatMessages.scrollTop = chatMessages.scrollHeight;
  };

  // Function to send message to server
  const sendMessage = async () => {
    const message = userInput.value.trim();
    if (!message) return;

    // Add user message to chat
    addMessage("user", message);
    userInput.value = "";
    setTyping(true);

    try {
      const response = await fetch("http://localhost:3000/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setTyping(false);
      addMessage("bot", data.reply);
    } catch (error) {
      console.error("Error:", error);
      setTyping(false);
      addMessage(
        "bot",
        "Sorry, I'm having trouble connecting to the server. Please try again later."
      );
    }
  };

  // Event listeners
  sendButton.addEventListener("click", sendMessage);
  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  });
});

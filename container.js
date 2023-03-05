document.addEventListener("DOMContentLoaded", function() {
    const chatboxMessages = document.getElementById("chatbox-messages");

    let user1name = ("John");
    let user2name = ("Alice");
    let user3name = ("Bob");
    let user4name = ("Omar");
    let user5name = ("Aroha");

    const userElement = document.getElementById("user1");
    userElement.innerHTML = user1name;;

    const userElement1 = document.getElementById("user2");
    userElement1.innerHTML = user2name;;

    const userElement2 = document.getElementById("user3");
    userElement2.innerHTML = user3name;;

    const userElement3 = document.getElementById("user4");
    userElement3.innerHTML = user4name;;

    const userElement4 = document.getElementById("user5");
    userElement4.innerHTML = user5name;;

    const users = [
        { id: 1, name: "John" },
        { id: 2, name: "Alice" },
        { id: 3, name: "Bob" },
        { id: 4, name: "Omar"},
        { id: 5, name: "Aroha"}
      ];
  
      function addMessage(user, message, time) {
        const p = document.createElement("p");
        p.innerHTML = `${user.name} (${time}): ${message}`;
        p.classList.add(`user${user.id}`);
        chatboxMessages.appendChild(p);
      }
      
      function sendMessage() {
        const input = document.querySelector(".chatbox-footer input[type='text']");
        const message = input.value;
        if (message.trim() === "") {
          return;
        }
        const user = users[Math.floor(Math.random() * users.length)]; // Select a random user
        const time = new Date().toLocaleTimeString();
        addMessage(user, message, time);
        input.value = "";
      }
          

    const sendButton = document.querySelector(".chatbox-footer button");
    sendButton.addEventListener("click", sendMessage);
  
    const input = document.querySelector(".chatbox-footer input[type='text']");
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        sendMessage();
      }
    });
  });
  
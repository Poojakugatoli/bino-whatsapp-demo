function search() {
  const input = document.getElementById("query");
  const query = input.value.trim();
  if (!query) return;

  const chatBox = document.querySelector(".chat-box");

  const userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.innerText = query;
  chatBox.appendChild(userMsg);

  const botMsg = document.createElement("div");
  botMsg.className = "message bot";
  botMsg.innerText = `Here are some results related to "${query}".\nThis is a demo of how Bino could respond on WhatsApp.`;
  chatBox.appendChild(botMsg);

  input.value = "";
}

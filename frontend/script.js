function toggleTheme() {
    const body = document.body;

    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        body.classList.add("light");
    } else {
        body.classList.remove("light");
        body.classList.add("dark");
    }
}

function handleEnter(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

async function sendMessage() {
    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    const model = document.getElementById("model").value;

    const message = input.value.trim();
    if (!message) return;

    // User message
    chatBox.innerHTML += `<div class="user">${message}</div>`;
    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;

    // Bot typing container
    const botDiv = document.createElement("div");
    botDiv.className = "bot";
    chatBox.appendChild(botDiv);

    const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, model })
    });

    const data = await response.json();
    typeText(botDiv, data.reply);

    chatBox.scrollTop = chatBox.scrollHeight;
}

function typeText(element, text) {
    let i = 0;
    const speed = 20;

    function typing() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

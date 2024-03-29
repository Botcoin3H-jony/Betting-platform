let chatmessages = [];

function displaychatmessages() {
    const chatcontainer = document.getElementById('chatcontainer');
    chatcontainer.innerHTML = '';

    chatmessages.forEach((chat) => {
        const messagediv = document.createElement('div');
        messagediv.textContent = `${chat.user}: ${chat.message}`;
        chatcontainer.appendChild(messagediv);
    });
}

function sendmessage(user, message) {
    chatmessages.push({ user, message });
    displaychatmessages();
}

document.getElementById('messageform').addEventListener('submit', (event) => {
    event.preventDefault();
    const user = 'user';
    const message = document.getElementById('messageinput').value;
    sendmessage(user, message);
    document.getElementById('messageinput').value = ''; // clear input after sending
});

displaychatmessages(); 
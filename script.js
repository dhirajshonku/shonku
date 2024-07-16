$(document).ready(function() {
    const chatMessages = $(".chat-messages");
    const userInput = $("#user-input");
    const sendBtn = $("#send-btn");

    sendBtn.click(function() {
        const userMessage = userInput.val();
        if (userMessage !== "") {
            // Call your conversational AI bot API here
            // For demo purposes, we'll just append the message to the chat window
            chatMessages.append(`<div class="chat-message">You: ${userMessage}</div>`);
            userInput.val("");
        }
    });
});

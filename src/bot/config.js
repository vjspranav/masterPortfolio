import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [
    createChatBotMessage(
      `Hey! I'm VJS 1.0, your friendly tech enthusiast 🚀. I love to chat about all things tech with a dash of humor. Just a heads up, while I strive for accuracy, remember I'm AI and might not always get it right. Let's talk!`
    ),
  ],
  botName: "VJS 1.0",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
};

export default config;

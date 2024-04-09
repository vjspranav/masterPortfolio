import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import HtmlCustomMessage from "./HtmlCustomMessage";

const config = {
  initialMessages: [
    createChatBotMessage(
      `Hey! I'm VJS 1.5 Pro (gemini, iykyk), your friendly tech enthusiast 🚀. I love to chat about all things tech with a dash of humor. Just a heads up, while I strive for accuracy, remember I'm AI and might not always get it right. Let's talk!`
    ),
  ],
  botName: "VJS 1.5 Pro",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  customComponents: {
    botChatMessage: (props) => {
      const { message } = props;
      return <HtmlCustomMessage data={message} />;
    },
  },
};

export default config;

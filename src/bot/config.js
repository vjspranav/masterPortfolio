import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import HtmlCustomMessage from "./HtmlCustomMessage";

const config = {
  initialMessages: [
    createChatBotMessage(
      `Hey! I'm VJS — engineer at Apple, open-source builder, and AI enthusiast 🚀. Ask me about my work, projects, or anything tech.`
    ),
  ],
  botName: "VJS 3.0",
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

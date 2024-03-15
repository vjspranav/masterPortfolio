import React, { useState } from "react";
import "./App.css";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import config from "./bot/config.js";
import MessageParser from "./bot/MessageParser.js";
import ActionProvider from "./bot/ActionProvider.js";

import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const toggleChat = () => setIsChatOpen(!isChatOpen);

  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={chosenTheme} />
          <div
            onClick={toggleChat}
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              zIndex: 999, // Ensure the button is below the Chatbot component
              backgroundColor: "#5ccc9d", // Bot-like green color
              border: "none",
              borderRadius: "30px", // Adjusted for a pill shape to include text
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)", // Adds some shadow for depth
              padding: "10px 20px", // Padding adjusted to fit text and icon
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/icons/apple-touch-icon.png`}
              alt="Chat"
              style={{
                width: "30px", // Adjust as needed
                height: "30px", // Adjust as needed
                marginRight: "10px", // Space between icon and text
              }}
            />
            <span
              style={{ color: "white", fontWeight: "bold", fontSize: "14px" }}
            >
              Talk to Me
            </span>
          </div>

          {isChatOpen && (
            <div
              style={{
                position: "fixed",
                bottom: "100px", // Adjust based on your chatbot's size
                right: "20px",
                zIndex: 1000, // Ensures the chat is above the button
              }}
            >
              <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
              />
            </div>
          )}
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;

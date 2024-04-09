import React from "react";
import axios from "axios";
import { Remarkable } from "remarkable";
import DOMPurify from "dompurify";

const ActionProvider = ({
  createChatBotMessage,
  setState,
  state,
  children,
}) => {
  const errorMessage = "Sorry, there was an error. Please try again.";

  const toggleLoadingMessage = (isLoading) => {
    if (isLoading) {
      // Add a loading message
      const loadingMessage = createChatBotMessage("VJS is typing...", {
        widget: "loading",
      });
      setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, loadingMessage],
      }));
    } else {
      // Remove the loading message
      setState((prevState) => ({
        ...prevState,
        messages: prevState.messages.slice(0, prevState.messages.length - 1),
      }));
    }
  };

  const sendRequest = (conversationContext, retries = 3) => {
    axios
      .post(
        "https://o4o85dyht7.execute-api.ap-south-1.amazonaws.com/default/vjsdev-chat",
        { conversationContext }
      )
      .then((response) => {
        // console.log("conversationContext", conversationContext);
        // console.log("Response from the API", response.data);
        // console.log("Status code", response.data.statusCode);
        if (response.data.statusCode !== 200) {
          if (retries > 0) {
            console.log(`Retrying... Attempts left: ${retries - 1}`);
            sendRequest(conversationContext, retries - 1);
          } else {
            toggleLoadingMessage(false);
            const botMessage = createChatBotMessage(errorMessage);
            setState((prevState) => ({
              ...prevState,
              messages: [...prevState.messages, botMessage],
            }));
          }
          return;
        }
        toggleLoadingMessage(false);
        const body = JSON.parse(response.data.body);
        const reply = body.candidates[0].content.parts[0].text;
        const md = new Remarkable();
        const html = md.render(reply);
        const sanitizedHtml = DOMPurify.sanitize(html); // Sanitize the HTML

        const botMessage = createChatBotMessage(sanitizedHtml);
        setState((prevState) => ({
          ...prevState,
          messages: [...prevState.messages, botMessage],
        }));
      })
      .catch((error) => {
        if (retries > 0) {
          console.log(`Retrying... Attempts left: ${retries - 1}`);
          sendRequest(conversationContext, retries - 1);
        } else {
          console.error("Error during the API call", error);
          toggleLoadingMessage(false);
          const botMessage = createChatBotMessage(errorMessage);
          setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, botMessage],
          }));
        }
      });
  };

  const getResponse = (message) => {
    // Create an array to hold the conversation context
    let conversationContext = [];
    // Assuming 'state.messages' holds your message history
    // And each message in the history has a 'type' ('bot' or 'user') and 'text'
    state.messages.forEach((msg, index) => {
      // ignore the first message
      if (index === 0) return;
      const role = msg.type === "bot" ? "model" : "user";
      // if message is error and role is model, do not push to conversationContext and remove the last message from conversationContext
      if (msg.message === errorMessage && role === "model") {
        conversationContext.pop();
        return;
      }

      let tmpTxt = msg.message;
      conversationContext.push({
        role: role,
        parts: [{ text: tmpTxt }],
      });
    });

    // Append the current user message to the context
    conversationContext.push({
      role: "user",
      parts: [
        {
          text: `${message}. Please respond in markdown format.`,
        },
      ],
    });

    // Show loading message
    toggleLoadingMessage(true);
    // Send the conversation context to your backend
    sendRequest(conversationContext);
  };

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            getResponse,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;

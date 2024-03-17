// In your widgets setup
import React from "react";

const HtmlCustomMessage = ({ data }) => {
  // Dangerously set HTML directly, assuming it's sanitized
  return (
    <div
      className="react-chatbot-kit-chat-bot-message"
      dangerouslySetInnerHTML={{ __html: data }}
    />
  );
};

// Export as part of your widget setup
export default HtmlCustomMessage;

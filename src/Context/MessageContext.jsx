import React, { createContext, useState, useEffect } from "react";

const MessageContext = createContext({
  messagesMain: [],
  setMessagesMain: () => {}
});

export const MessageProvider = ({ children }) => {
  const [messagesMain, setMessagesMain] = useState(() => {
    const storedMessages = localStorage.getItem("messagesMain");
    return storedMessages ? JSON.parse(storedMessages) : [];
  });

  useEffect(() => {
    localStorage.setItem("messagesMain", JSON.stringify(messagesMain));
  }, [messagesMain]);


  const clearMessagesMain = () => {
    setMessagesMain([]);
    localStorage.removeItem("messagesMain");
  };

  return (
    <MessageContext.Provider value={{ messagesMain, setMessagesMain, clearMessagesMain }}>
      {children}
    </MessageContext.Provider>
  );
};

export default MessageContext;

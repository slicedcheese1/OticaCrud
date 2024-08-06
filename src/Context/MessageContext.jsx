import React, { createContext, useState, useEffect } from "react";
import { toast } from 'react-toastify';


const MessageContext = createContext({
  messagesMain: [],
  setMessagesMain: () => {},
  successMessage: () => {},
  errorMessage: () => {}
});

export const MessageProvider = ({ children }) => {

    // toastfy
    const successMessage = (message) => {
      toast.success(message)
    }
  
    const errorMessage = (message) => {
      toast.error(message)
    }
  

  return (
    <MessageContext.Provider value={{ successMessage, errorMessage }}>
      {children}
    </MessageContext.Provider>
  );
};

export default MessageContext;

import React, { useEffect, useState, useContext } from "react";
import { Link } from 'react-router-dom';
import Message from "../../Componentes/Messages/Message";
import TableSearch from "../../Componentes/Busca/TableSearch";
import Button from "react-bootstrap/Button";
import MessageContext from '../../Context/MessageContext';

const Unidades = () => {
  const { messagesMain, setMessagesMain, clearMessagesMain } = useContext(MessageContext);

  useEffect(() => {
    if (messagesMain.length > 0) {
      // Clear messages after they have been displayed
      clearMessagesMain();
    }
  }, [messagesMain, clearMessagesMain]);

  const handleCloseMessage = (index) => {
    setMessagesMain(messagesMain.map((message, i) => (i === index ? { ...message, show: false } : message)));
  };


  return (
    <>
      <div className='d-flex flex-column gap-2 container'>
        {messagesMain.map((message, index) => (
          <Message
            key={index}
            variant={message.variant}
            title={message.title}
            text={message.text}
            showCard={message.show}
            onClose={() => handleCloseMessage(index)}
          />
        ))}
      </div>
      <div className="d-flex w-100 justify-content-between container">
        <h1>Unidades</h1>
        <Link to={`/Sistema/cadastrar-unidade`}>
          <Button>Nova Unidade</Button>
        </Link>
      </div>
      <hr />
      <TableSearch 
        routeSearch={"http://localhost:8080/unidade"}
        routeDeleteNoId={"http://localhost:8080/unidade/"}
        idLabel={"id"}
        namePage={"Unidades"}
        nameEntity={"unidade"}
        columnNames={["nome"]}
        searchPlaceholder={"Digite o nome da unidade"}
      />
    </>
  );
};

export default Unidades;

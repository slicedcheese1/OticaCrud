import { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';

const Message = ({ variant, title, text, showCard, onClose }) => {
  const [show, setShow] = useState(showCard);

  useEffect(() => {
    setShow(showCard);
  }, [showCard]);

  return (
    show && (
      <Alert variant={variant} onClose={() => { setShow(false); onClose(); }} dismissible>
        <Alert.Heading>{title}</Alert.Heading>
        {/* <p>{text}</p> */}
      </Alert>
    )
  );
};

export default Message;
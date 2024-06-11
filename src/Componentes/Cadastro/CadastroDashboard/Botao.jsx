

import PropTypes from 'prop-types';


function Botao({ titulo, text, Icon, link }) {
  return (
    <a href={link} className="card-opt">
      <h4>{titulo}</h4>
      <Icon className='icon-people' />
      <p>{text}</p>
    </a>
  );
}

Botao.propTypes = {
  titulo: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired, // O componente de ícone é passado como uma prop
  link: PropTypes.string.isRequired,
};

export default Botao;

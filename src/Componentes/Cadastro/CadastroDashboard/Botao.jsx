import PropTypes from 'prop-types';
import styles from './Botao.module.css';

function Botao({ titulo, Icon, link, iconColor }) {
  return (
    <a href={link} className={styles.cardOpt}>
      
      <Icon className={styles.iconPeople} style={{ color: iconColor }} />
      <p>{titulo}</p>
    </a>
  );
}

Botao.propTypes = {
  titulo: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired, // O componente de ícone é passado como uma prop
  link: PropTypes.string.isRequired,
  iconColor: PropTypes.string, // Adiciona a prop iconColor
};

Botao.defaultProps = {
  iconColor: '#000', // Cor padrão se não for especificada
};

export default Botao;

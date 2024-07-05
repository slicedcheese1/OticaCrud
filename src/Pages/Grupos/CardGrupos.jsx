import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from './CardGrupos.module.css';
function CardGrupos() {
  return (
    <Card>
      <Card.Header id="Titulo-Card">Novo Grupo de Produtos</Card.Header>
      <Card.Body>
        <blockquote className={styles.cFlex}>
          <Row>
          <div className={styles.dFlex}>
          <Col>
          <Form.Label id="NomeProduto">Novo Produto</Form.Label>
          <Form.Control id={styles.NomeProduto} type="Produto" placeholder="Descrição do Grupo" />
          </Col>
          </div>
          <Col>
          <Form.Label id="NomeProduto">Categoria</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Produto</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>         
          </Row>
        </blockquote>
      </Card.Body>
      
    </Card>
  );
}

export default  CardGrupos;

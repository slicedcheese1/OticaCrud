import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

import styles from './CardGrupos.module.css';
function CardGrupos() {
  return (
    <Card>
      <Card.Header id="Titulo-Card">Novo Grupo de Produtos</Card.Header>
      <hr/>
      <Card.Body>
        <blockquote className="blockquotemb-0">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label id="NomeProduto">Novo Produto</Form.Label>
          
          <div className={styles.dFlex}>
            <Form.Control  type="Produto" placeholder="Descrição do Grupo" />
            
            <div className={styles.cFlex}>
            
            <h4 id="Text-cat">Categoria</h4>
            <Form.Select aria-label="Default select example">
              <option>Produto</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            </div>
        
          </div>
          </Form.Group>
        </Form>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default  CardGrupos;

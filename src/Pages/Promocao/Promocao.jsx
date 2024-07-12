import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import { MdPeopleAlt } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaFilter,FaPercentage } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import styles from './Promocao.module.css';
import { FormGroup, FormLabel } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
function Promocao() {
  return (
    
    <Card>
        
      <Card.Header id={styles.TituloCard}>Produtos em Promoção</Card.Header>
      <Card.Body>
        <blockquote className={styles.cFlex}>
        <Row>
          <div className={styles.dFlex}>
          <Col>
          <Form.Label id={styles.NomeProduto}>Tipo de Promoção*</Form.Label>
          <Form.Control id={styles.inputfield} type="Produto" placeholder="Porcentagem de Desconto" />
          </Col>
          </div>     
          </Row>
          <Row>
          <Col>   
          <Form.Group id={styles.mb93}>
          
        <Form.Check type="checkbox" />
        <FormLabel id={styles.mb95}>Aplicar o mesmo desconto para todos os produtos</FormLabel>
      </Form.Group>
      </Col> 
        </Row>
        
          <Row>
          
          <Form.Label id={styles.Busca}>Busca</Form.Label>
          
          <Col>
          <InputGroup className={styles.mb5}>
          
        <InputGroup.Text id={styles.inputfieldB}><FaSearch></FaSearch></InputGroup.Text>
        <Form.Control
          placeholder="Busque Produto por nome, referência ou código de barras..."
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
        </Col>
        <Col>
        <Button className={styles.mb6} variant="outline-primary"><FaFilter></FaFilter>  Filtrar Produtos</Button>{' '}

        </Col>
        
          </Row>
          <Row>
          <Col>   
          
          <Form.Group id={styles.mb93}>
          
        <Form.Check type="checkbox" />
        <FormLabel id={styles.mb95}>Estou usando um leitor de códigos de barras</FormLabel>
      </Form.Group>
      </Col> 


        </Row>
        <br></br>
        <br></br>
        <br></br>
      <Row> 
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Produtos</th>
          <th>Val. Custo</th>
          <th>Val. Unitário</th>
          <th>Desconto(%)</th>
          <th>Val. Final</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Produto A</td>
          <td>1</td>
          <td>1</td>
          <td><InputGroup.Text><FaPercentage></FaPercentage>12<Form.Label/></InputGroup.Text></td>
          <td>0.88</td>
        </tr>
        <tr>
          <td>Produto B</td>
          <td>1</td>
          <td>1</td>
          <td><InputGroup.Text><FaPercentage></FaPercentage>12<Form.Label/></InputGroup.Text></td>
          <td>0.88</td>
        </tr>
        <tr>
          <td>Produto V</td>
          <td>1</td>
          <td>1</td>
          <td><InputGroup.Text><FaPercentage></FaPercentage>12<Form.Label/></InputGroup.Text></td>
          <td>0.88</td>
        </tr>
      </tbody>
    </Table>
        
      </Row>
        
        </blockquote>
      </Card.Body>
      
    </Card>
  );
}

export default  Promocao;

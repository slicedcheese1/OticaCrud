import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaSearch } from "react-icons/fa";
import {FaPercentage } from 'react-icons/fa';
import styles from './Promocao.module.css';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
function Promocao() {
  const [tipoPromocao, setTipoPromocao] = useState()

  return (
    
    
    <div className='formContainer'>
      <h1>Produtos em Promoção</h1>
      <hr />   
      {/* <Card.Header id={styles.TituloCard}>Produtos em Promoção</Card.Header> */}
      <Card.Body>
        <blockquote className={styles.cFlex}>
        <Row>
          <div className={styles.dFlex}>
            <Form.Group className={`w-90 d-flex flex-column gap-1 ml-2 mr-5`}>
              <Form.Label id="label-lojas" htmlFor="lojas">Cadastro Em</Form.Label> 
              <Form.Select className="input" name="loja" value={tipoPromocao} onChange={(e) => {setTipoPromocao(e.target.value)}} required>
                <option value="" disabled selected >Selecione uma opção</option>
                <option value="ValorFinal">Valor Final</option>  
                <option value="DescontoPrecoFixo">Desconto em preço fixo</option>  
                <option value="DescontoPorcentagem">Desconto em porcentagem</option>  
              </Form.Select>    
            </Form.Group>
          </div>     
        </Row>
        <Row>
          <Col>   
            <Form.Group className='d-flex justify-content-cente align-items-center gap-2' >
            
              <Form.Check type="checkbox" />
              <Form.Label className='mb-0' >Aplicar o mesmo desconto para todos os produtos</Form.Label>
            </Form.Group>
          </Col> 
        </Row>
        
        <Row>
          
          <Form.Label id={styles.Busca}>Busca</Form.Label>
          
          <Col className="w-90  d-flex flex-column gap-1 ml-2 mr-5">
            <InputGroup >
              <InputGroup.Text ><FaSearch></FaSearch></InputGroup.Text>
              <Form.Control
                className='input mb-0'
                placeholder="Busque Produto por nome, referência ou código de barras..."
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <Form.Group className='d-flex justify-content-cente align-items-center gap-2'>
          
              <Form.Check type="checkbox" />
              <Form.Label className='mb-0'>Estou usando um leitor de códigos de barras</Form.Label>
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
            {tipoPromocao === 'ValorFinal' && (
            <th>Desconto - Valor Final</th>
            )}
            {tipoPromocao === 'DescontoPrecoFixo' && (
            <th>Desconto - Preço Fixo</th>
            )}
            {tipoPromocao === 'DescontoPorcentagem' && (
            <th>Desconto - %</th>
            )}
            <th>Val. Final</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Produto A</td>
            <td>1</td>
            <td>1</td>
            <td>
              <Form.Control
              value={{}} 
              onChange={(e) => {}}
              ></Form.Control>
            </td>
            <td>0.88</td>
          </tr>

        </tbody>
        </Table>
      </Row>
        
        </blockquote>
      </Card.Body>
      
    </div>
  );
}

export default  Promocao;

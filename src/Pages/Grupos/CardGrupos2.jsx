import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './CardGrupos2.css';
import CardGrupos from './CardGrupos';
import InputGroup from 'react-bootstrap/InputGroup';
function CardGrupos2() {
  const [selectedTab, setSelectedTab] = useState('link-0');

  const renderInput = () => {
    switch (selectedTab) {
      case 'link-0':
        return (
            
        <div>
        <h3>Operações dentro do estado</h3>
        <Form.Text id="passwordHelpBlock" muted>
        Quando o destinatário está localizado no mesmo estado que você
      </Form.Text>
      <hr></hr>
      <h5>Venda</h5>
      <Form.Select aria-label="Default select example">
        
        <option>Escolha uma opção</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      <br></br>
      <h5>Devolução de Compra</h5>
      <Form.Select aria-label="Default select example">
        
        <option>Escolha uma opção</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      <br></br>
      <h5>Remessa em garantia</h5>
      <Form.Select aria-label="Default select example">
        
        <option>Escolha uma opção</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      <br></br>
      <h5>Transferência de produtos</h5>
      <Form.Select aria-label="Default select example">
        
        <option>Escolha uma opção</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      <br></br>
      <h3>Operações Fora do estado</h3>
        <Form.Text id="passwordHelpBlock" muted>
        Quando o destinatário está localizado no mesmo estado que você
      </Form.Text>
      <hr></hr>
      <h5>Venda</h5>
      <Form.Select aria-label="Default select example">
        
        <option>Escolha uma opção</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      <br></br>
      <h5>Devolução de Compra</h5>
      <Form.Select aria-label="Default select example">
        
        <option>Escolha uma opção</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      <br></br>
      <h5>Remessa em garantia</h5>
      <Form.Select aria-label="Default select example">
        
        <option>Escolha uma opção</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      <br></br>
      <h5>Transferência de produtos</h5>
      <Form.Select aria-label="Default select example">
        
        <option>Escolha uma opção</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      <br></br>
        </div>
        
        );
      case 'link-1':
        return (
      <div>
      <br></br>
      <h5>Código de origem da Mercadoria</h5>
      <Form.Select aria-label="Default select example">
        
        <option>Escolha uma opção</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      <br></br>
      <h5>CSOSN - Código de Situação da Operação no Simples Nacional</h5>
      <Form.Select aria-label="Default select example">
        
        <option>Escolha uma opção</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      <br></br>
      <h5>CST - Código de Situação Tributária</h5>
      <Form.Select aria-label="Default select example">
        
        <option>Escolha uma opção</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      <br></br>
      <h4>Quando aplicável, informe abaixo as configurações para cálculo do ICMS</h4>
      <hr></hr>
      <br></br>
      <h5>Alíquota do imposto</h5>
      <InputGroup className="mb-3">
        
        <Form.Control
          placeholder=""
          aria-label="Number"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
      </InputGroup>
      <h5>Alíquota aplicável de calculo do crédito</h5>
      <InputGroup className="mb-3">
        
        <Form.Control
          placeholder=""
          aria-label="Number"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
      </InputGroup>
      <h5>Percentual Base de Cálculo ICMS</h5>
      <InputGroup className="mb-3">
        
        <Form.Control
          placeholder=""
          aria-label="Number"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
      </InputGroup>
      </div>
        );
      case 'link-2':
        return (
            <div>
          <br></br>
      <h5>Alíquota do imposto</h5>
      <InputGroup className="mb-3">
        
        <Form.Control
          placeholder=""
          aria-label="Number"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
      </InputGroup>
      <h5>Alíquota aplicável de calculo do crédito</h5>
      <InputGroup className="mb-3">
        
        <Form.Control
          placeholder=""
          aria-label="Number"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
      </InputGroup>
      <h5>Percentual Base de Cálculo ICMS</h5>
      <InputGroup className="mb-3">
        
        <Form.Control
          placeholder=""
          aria-label="Number"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
      </InputGroup>
          </div>
        );
      case 'link-3':
        return (
            <div className="Lado">
          <br></br>
      <h5>Situação Tributária</h5>
      <Form.Select aria-label="Default select example">
        
        <option>Selecione o CST IPI</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      <br></br>
      <div className="Kanye-West">
      <Form.Label>Tipo de Cálculo</Form.Label>
      <Row sm={10}>
            <Form.Check
              type="radio"
              label="first radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="second radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
          </Row>
      </div>
          </div>
          
    
        );
      case 'link-4':
        return (
          <Form.Group className="mb-3" controlId="formPIS">
            <Form.Label>PIS</Form.Label>
            <Form.Control type="text" placeholder="Insira o PIS" />
          </Form.Group>
        );
      case 'link-5':
        return (
          <Form.Group className="mb-3" controlId="formCOFINS">
            <Form.Label>COFINS</Form.Label>
            <Form.Control type="text" placeholder="Insira o COFINS" />
          </Form.Group>
        );
      default:
        return null;
    }
  };

  return (
    <Card>
      <Card.Header id="Titulo-Card">Informações para emissão de NF-e e NFC-e</Card.Header>
      <hr></hr>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicNCM">
            <Form.Label>NCM - Nomenclatura Comum do Mercosul</Form.Label>
            <Form.Control type="text" placeholder="Pesquise por NCM ou descrição" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCest">
            <Form.Label>CEST - Código Especificador da Substituição Tributária</Form.Label>
            <Form.Control type="text" placeholder="Pesquise por CEST ou descrição - Selecione o NCM primeiro" />
          </Form.Group>
          
        </Form>
        <Nav variant="tabs" defaultActiveKey="link-0" onSelect={(selectedKey) => setSelectedTab(selectedKey)}>
          <Nav.Item>
            <Nav.Link eventKey="link-0">CFOP</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">ICMS</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">ICMS Substituição Tributária</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">IPI</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-4">PIS</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-5">COFINS</Nav.Link>
          </Nav.Item>
        </Nav>
        {renderInput()}
      </Card.Body>
    </Card>
  );
}

export default CardGrupos2;

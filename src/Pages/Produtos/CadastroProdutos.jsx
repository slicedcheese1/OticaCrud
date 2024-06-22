import React from 'react'
import { Form } from 'react-bootstrap'

const CadastroProdutos = () => {
  return (
    <>
    <form>
    <div className='container-dados-pessoais-funcionario'>
                <h2>Dados pessoais </h2>
                <hr/>
                
                <Form.Group className="mb-3" controlId="">
                  <Form.Label>Código GTIN</Form.Label>
                  <Form.Control 
                    type="text" 
                 
                    
                   
                  />
                </Form.Group>
                
                <Form.Group>
                  <Form.Label>Referência</Form.Label>
                  <Form.Control 
                    name="loja"
                    type='text' 
            
                    
               
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Nome do Produto</Form.Label>
                  <Form.Control
                    name="email"
                    type='text' 
                 
                    
                  
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Unidade</Form.Label>
                  <Form.Select 
                  name="unidade"
                 
                  
                  >
                      <option value="" disabled  >Unidade</option>
                      <option value=''>Unidade 1</option>  
                    
                  </Form.Select>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Grupo</Form.Label>
                  <Form.Select 
                  name="grupodeprodutos"
                 
                  
                  >
                      <option value="" disabled  >Grupo</option>
                      <option value=''>Grupo 1</option>  
                    
                  </Form.Select>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Fornecedor</Form.Label>
                  <Form.Select 
                  name="fornecedor"
                 
                  
                  >
                      <option value="" disabled  >Fornecedor</option>
                      <option value=''>Fornecedor 1</option>  
                    
                  </Form.Select>

                </Form.Group>

                <Form.Group>
                  <Form.Label>Lente</Form.Label>
                  <Form.Control 
                    name="lente"
                    type='text' 
                   
                    
                    
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Haste</Form.Label>
                  <Form.Control
                    name="haste"
                    type='text' 
                  
                    
                 
                  />  
                </Form.Group>

                <Form.Group>
                  <Form.Label>Modelo da lente</Form.Label>
                  <Form.Control
                    name="haste"
                    type='text'   
                  />  
                </Form.Group>
                <hr/>
                <Form.Group>
                  <Form.Label>Data de validade </Form.Label>
                  <Form.Control
                    name="haste"
                    type='text'   
                  />  
                </Form.Group>
                <Form.Group>
                  <Form.Label>Preço de custo</Form.Label>
                  <Form.Control
                    name="haste"
                    type='text'   
                  />  
                </Form.Group>
                
                <Form.Group>
                  <Form.Label>Preço de venda</Form.Label>
                  <Form.Control
                    name="haste"
                    type='text'   
                  />  
                </Form.Group>


                <Form.Group>
                  <Form.Label>% Lucro</Form.Label>
                  <Form.Control
                    name="haste"
                    type='text'   
                  />  
                </Form.Group>
                
                <Form.Group>
                  <Form.Label>Lucro</Form.Label>
                  <Form.Control
                    name="haste"
                    type='text'   
                  />  
                </Form.Group>

                <Form.Group>
                  <Form.Label>Quantida de atual</Form.Label>
                  <Form.Control
                    name="haste"
                    type='text'   
                  />  
                </Form.Group>

                <Form.Group>
                  <Form.Label>Quantidade mínima</Form.Label>
                  <Form.Control
                    name="haste"
                    type='text'   
                  />  
                </Form.Group>







            </div>
            <button
           
            >Cadastrar</button>

            <div className='container-dados-usuario'>
            
            </div>
    </form>
    </>
  )
}

export default CadastroProdutos

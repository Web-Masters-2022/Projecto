import React from 'react';
import PropTypes from 'prop-types';
import styles from '../estilos/EditarProductos.module.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Header from '../components/header';

const EditarProductos = () => {

  return (
    <>
    <div>
      <Header/>
    </div>

    <div className="d-flex justify-content-around product-container">
      <div>
        <ListGroup as="ul" style={{width: '18rem'}}>
          <ListGroup.Item as="li" active>
            PRODUCTOS
          </ListGroup.Item>
          <ListGroup.Item as="li">Producto 1</ListGroup.Item>
          <ListGroup.Item as="li">Producto 2</ListGroup.Item>
          <ListGroup.Item as="li">Producto 3</ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <Card style={{ width: '30rem' }}>
          <img variant="top" src="/images/android.png" height={100} width={100} style={{margin: "auto"}}/>
          <Card.Body>
            <Card.Title>PRODUCTO A AGREGAR</Card.Title>
            <Card.Text>
              <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Nombre del Producto</InputGroup.Text>
              <Form.Control
                id="NombreNewInput"
                placeholder="Nombre del producto"
                aria-label="Email"
                aria-describedby="basic-addon1"
                />
              </InputGroup>
              <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon2">Descripción del Producto</InputGroup.Text>
              <Form.Control
                id="DescripcionNewInput"
                placeholder="Descripción del producto"
                aria-label="Email"
                aria-describedby="basic-addon2"
                />
              </InputGroup>
              <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon3">Precio del Producto</InputGroup.Text>
              <Form.Control
                id="PrecioNewInput"
                placeholder="Precio del producto"
                aria-label="Email"
                aria-describedby="basic-addon3"
                />
              </InputGroup>
              <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon4">Stock del Producto</InputGroup.Text>
              <Form.Control
                id="PrecioNewInput"
                placeholder="Stock del producto"
                aria-label="Email"
                aria-describedby="basic-addon4"
                />
              </InputGroup>

            </Card.Text>
            <Button variant="primary">Agregar Producto</Button>
          </Card.Body>
        </Card>
        

        
      </div>
    </div>

    <div className="footer-container">
                <h1 className="foot-text">Copyrigth</h1>
            </div>
  </>
  )
};

export default EditarProductos;

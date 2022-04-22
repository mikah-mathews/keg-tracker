import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Keg(props) {

  return (
    <React.Fragment>
      <ListGroup.Item className="mb-3 border shadow-sm">
        <Row>
          <Col className="pt-2 pb-2 position-relative">
            <h4 className="fw-normal border-bottom pb-1">{props.name}<span className="fw-light">|</span> <span className="fs-6">({props.pints} Pints Available)</span></h4>
            Brand: {props.brand}<br />
            Bean Type: {props.beanType} <br />
            Pint Price: $ {props.price} <br />
            {props.description}<br /><br /><br />

            <div className="mt-3 me-3 text-end position-absolute bottom-0 end-0">
              <Button variant="dark" size="sm" className="me-3 px-4 rounded-pill shadow-sm">Buy a Pint</Button>
              <Button variant="dark" size="sm" className="px-4 rounded-pill shadow-sm">Edit</Button>
            </div>
          </Col>
        </Row>
      </ListGroup.Item> 
    </React.Fragment>
  );
}

export default Keg;
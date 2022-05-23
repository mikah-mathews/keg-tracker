import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

function Keg(props) {

  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <ListGroup.Item className="mb-3 border shadow-sm">
          <Row>
            <Col className="pt-2 pb-2 position-relative">
              <h4 className="fw-normal border-bottom pb-1">{props.name}<span className="fw-light"> | </span> <span className="fs-6">({props.pints} Pints Available)</span></h4>
              <br />
              <div className="mt-3 me-3 text-end position-absolute bottom-0 end-0">
                <Button variant="dark" size="sm" className="me-3 px-4 rounded-pill shadow-sm">Buy a Pint</Button>
              </div>
            </Col>
          </Row>
        </ListGroup.Item>
      </div> 
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  pints: PropTypes.string,
  brand: PropTypes.string,
  beanType: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
}
export default Keg;
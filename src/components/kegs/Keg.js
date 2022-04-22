import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <React.Fragment>
      <ListGroup.Item className="mb-3 border shadow-sm">
        <Row>
          <Col className="pt-2 pb-2 position-relative">
            <div onClick = {() => props.whenKegClicked(props.id)}>
              <h4 className="fw-normal border-bottom pb-1">{props.name}<span className="fw-light">|</span> <span className="fs-6">({props.pints} Pints Available)</span></h4>
              Brand: {props.brand}<br />
            </div>
          </Col>
        </Row>
      </ListGroup.Item> 
    </React.Fragment>
  );
}

Keg.propTypes = {
  whenTicketClicked: PropTypes.func
}
export default Keg;
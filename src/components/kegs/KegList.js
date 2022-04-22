import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {
  return (
    <React.Fragment>
      <Row className="border rounded shadow-sm">
          <Col md={8} className="p-3 fw-light">
            <ListGroup>
              {props.mainKegList.map((keg) =>
                <Keg
                whenKegClicked = {props.onKegSelection} 
                name={keg.name}
                brand={keg.brand}
                description={keg.description}
                price={keg.price}
                beanType={keg.beanType}
                pints={keg.pints} 
                key={keg.id}
                />
              )}
            </ListGroup>
          </Col>
          
        </Row>
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
}

export default TicketList;
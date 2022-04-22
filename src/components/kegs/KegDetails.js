import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const {keg} = props;
  return (
    <React.Fragment>
      <ListGroup.Item className="mb-3 border shadow-sm">
        <Row>
          <Col className="pt-2 pb-2 position-relative">
            <h4 className="fw-normal border-bottom pb-1">{keg.name}<span className="fw-light">|</span> <span className="fs-6">({keg.pints} Pints Available)</span></h4>
            Brand: {keg.brand}<br />
            Bean Type: {keg.beanType} <br />
            Pint Price: $ {keg.price} <br />
            {keg.description}

            <div className="mt-3 me-3 text-end position-absolute bottom-0 end-0">
              <Button variant="dark" size="sm" className="me-3 px-4 rounded-pill shadow-sm">Buy a Pint</Button>
            </div>
          </Col>
        </Row>
      </ListGroup.Item> 
    </React.Fragment>
  )
}
import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.kegList.map((keg) =>
        <Keg 
          whenKegClicked = { props.onKegSelection }
          onClickingBuyPint = { props.handleBuyingPint}
          name={keg.name}
          brand={keg.brand}
          description={keg.description}
          price={keg.price}
          beanType={keg.beanType}
          pints={keg.pints} 
          key={keg.id}
          id={keg.id}
        />
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;
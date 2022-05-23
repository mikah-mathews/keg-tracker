import React from 'react';
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReuseableForm from '../form/ReuseableForm'

function KegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, description: event.target.description.value, price: event.target.price.value, beanType: event.target.beanType.value, pints: event.target.pints.value, id: v4()}) 
  }

  return (
    <React.Fragment>
      <ReuseableForm
        formSubmissionHandler={handleNewKegFormSubmission}
        buttonText="Add New Keg" />
    </React.Fragment>
  );
}

KegForm.propType = {
  onNewKegCreation: PropTypes.func
}

export default KegForm;
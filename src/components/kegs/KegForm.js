import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function KegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, description: event.target.description.value, price: event.target.price.value, beanType: event.target.beanType.value, pints: event.target.pints.value, id: v4()}) 
  }

  return (
    <React.Fragment>
      <Form onSubmit={handleNewKegFormSubmission}>
        <h5 className="text-center my-2">Add new Keg</h5>
        <Form.Control
          type='text'
          name='name'
          placeholder='Keg Name'
          className="mb-3 shadow-sm"
          required="required" />
        <Form.Control
          type='text'
          name='brand'
          placeholder='Brand Name'
          className="mb-3 shadow-sm"
          required="required" />
        <Form.Control
          type='text'
          name='beanType'
          placeholder='Bean Type'
          className="mb-3 shadow-sm"
          required="required" />
        <Form.Control
          as='textarea'
          rows={4}          
          name='description'
          placeholder='Description'
          className="mb-3 shadow-sm"
          required="required" />
        <Form.Control
          type='number'
          min='1'
          max='1000'
          name='price'
          placeholder='Price per Pint'
          className="mb-3 shadow-sm"
          required="required" />
        <Form.Control
          type='number'
          min='1'
          max='124'
          name='pints'
          placeholder='Number of Pints in Keg'
          className="mb-3 shadow-sm"
          required="required" />
        <Button variant="dark" size="sm" type="submit" className="px-4 rounded-pill shadow-sm">Submit</Button>
      </Form>
    </React.Fragment>
  );
}

KegForm.propType = {
  onNewKegCreation: PropTypes.func
}

export default KegForm;
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import KegList from './KegList';
import KegForm from './KegForm';
import KegDetails from './KegDetails';

class KegParentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainKegList: [],
      formVisibleOnPage: false,
      selectedKeg: null
    };
  }  

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({
      mainKegList: newMainKegList
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetails keg = {this.state.selectedKeg} />
      buttonText = "Return to Keg List"
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <Col md={4} className="py-3 px-4 fw-light">
        <Row className="text-center border rounded shadow-sm pb-5 pt-3 px-3">
          <Col>
            <KegForm onNewKegCreation={this.handleAddingNewKegToList} />
          </Col>
        </Row>
      </Col>
      buttonText = "Return to Keg List"
    } else {
      currentlyVisibleState = <KegList kegList={this.state.mainKegList} onKegSelection={this.handleChangingSelectedKeg} />
      buttonText="Add New Keg"
    }

    return (
      <Container className="pt-2">
        {currentlyVisibleState}
        <Button variant="dark" size="lg" type="submit" className="px-4 rounded-pill shadow-sm">{buttonText}</Button>
      </Container>
    );
  }
}

export default KegParentContainer;
import React from 'react';
import KegForm from './KegForm';
import KegList from './KegList';
import Button from 'react-bootstrap/Button';
import KegDetail from './KegDetail';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList: [],
      selectedKeg: null
    };
  }

  handleClick = () => { // Method to change state and toggle between form + list
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

  handleAddingNewKegToList = (newKeg) => { // Adds new Keg to state, then updates main state
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({
      mainKegList: newMainKegList, 
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleDeletingKeg = (id) => {
    const newMainKegList = this.state.mainKegList.filter(keg => keg.id !== id);
    this.setState({
      mainKegList: newMainKegList,
      selectedKeg: null
    });
  }

  handleBuyingPint = (id) => {
    let editedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    editedKeg.pints -= 1;
    const editedMainKegList = this.state.mainKegList.filter(keg => keg.id !== editedKeg.id).concat(editedKeg);
    this.setState({
      mainKegList: editedMainKegList
    })
  }


  render() {
    // Conditional Rendering
    let currentlyVisibleState = null; // this will determine the current visible state
    let buttonText = null;

    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg={this.state.selectedKeg} onClickingDelete = {this.handleDeletingKeg}  onClickingBuyPint = {this.handleBuyingPint}/>
      buttonText = "Return to Keg List";
    } else if (this.state.formVisibleOnPage) { // Shows form if formVisibleOnPage 
      currentlyVisibleState = <KegForm onNewKegCreation={this.handleAddingNewKegToList}/>
      buttonText = "Return to Keg List";
    } else { // Otherwise show the list of all kegs
      currentlyVisibleState = <KegList kegList={this.state.mainKegList} onKegSelection={this.handleChangingSelectedKeg} onClickingBuyPint = {this.handleBuyingPint}/>
      buttonText = "Add Keg";
    }

    // Evaluating and Returning Components
    return (
      <React.Fragment> 
        {currentlyVisibleState}
        <Button variant="dark" size="sm" className="me-3 px-4 rounded-pill shadow-sm" onClick={this.handleClick}>{buttonText}</Button>
      </React.Fragment>
    );
  }
}

export default KegControl;
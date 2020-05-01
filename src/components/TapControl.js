import React from 'react';
import NewTapForm from './NewTapForm';
import TapList from './TapList';
import TapDetail from './TapDetail';
import { connect } from 'react-redux';

class TapControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterTapList: [],
      selectedTap: null
    };
  }

  handleClick = () => {
    if (this.state.selectedTap != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTap: null
      });
    } else {
      this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewTapToList = (newTap) => {
    const newMasterTapList = this.state.masterTapList.concat(newTap);
    this.setState({
      masterTapList: newMasterTapList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedTap = (id) => {
    const selectedTap = this.state.masterTapList.filter(tap => tap.id === id)[0];
    this.setState({selectedTap: selectedTap});
  }

  handleTapPurchase = (id) => {
    const currentlySelectedTap = this.state.masterTapList.filter(tap => tap.id === id)[0];
    if (currentlySelectedTap.quantity > 0) {
      const newQuantityOfTap = currentlySelectedTap.quantity -1;
      const updatedTap = {...currentlySelectedTap, quantity: newQuantityOfTap};
      const previousTapList = this.state.masterTapList.filter(tap => tap.id !== id);
      this.setState({
        masterTapList: [...previousTapList, updatedTap],
        selectedTap: updatedTap
      });
    } else {
      alert (
        "🍺 This Tap Is Empty 🍺"
      )};
  }

  render(){

    const itemControlStyles = {
      position: 'relative',
      top: '30vh',
      margin: '2%',
      overflowY: 'auto'
    }

    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedTap != null) {
      currentlyVisibleState = <TapDetail 
        tap = {this.state.selectedTap} />
      buttonText = 'return to tap list';
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTapForm 
        onNewTapCreation={this.handleAddingNewTapToList} />;
      buttonText = 'return to tap list';
    } else {
      currentlyVisibleState = <TapList 
        tapList={this.state.masterTapList} 
        onTapSelection={this.handleChangingSelectedTap}
        onClickingSell={this.handleTapPurchase} />;
      buttonText = 'add new tap';
    }
    return (
      <React.Fragment>
        <div style={itemControlStyles}>
          <div class="row">
            <div class="col-md-6">
              <div className="adjustableButton">
                <button onClick={this.handleClick}>{buttonText}</button>
              </div>
            </div>
            <div class="col-md-6">
              <div className="storeFront">
                {currentlyVisibleState}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

}

TapControl = connect()(TapControl);

export default TapControl;
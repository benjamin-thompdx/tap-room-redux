import React from 'react';
import NewTapForm from './NewTapForm';
import TapList from './TapList';
import TapDetail from './TapDetail';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TapControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTap: null
    };
  }

  handleClick = () => {
    if (this.state.selectedTap != null) {
      this.setState({
        selectedTap: null
      });
    } else {
      const { dispatch } = this.props;
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action);
    }
  }

  handleAddingNewTapToList = (newTap) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, style, quantity } = newTap;
    const action = {
      type: 'ADD_TAP',
      id: id,
      name: name,
      brand: brand,
      price: price,
      style: style,
      quantity: quantity
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }

  handleChangingSelectedTap = (id) => {
    const selectedTap = this.props.masterTapList[id];
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
    else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewTapForm 
        onNewTapCreation={this.handleAddingNewTapToList} />;
      buttonText = 'return to tap list';
    } else {
      currentlyVisibleState = <TapList 
        tapList={this.props.masterTapList} 
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

TapControl.propTypes = {
  masterTapList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterTapList: state.masterTapList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

TapControl = connect(mapStateToProps)(TapControl);

export default TapControl;
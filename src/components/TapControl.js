import React from 'react';
import NewTapForm from './NewTapForm';
import TapList from './TapList';
import TapDetail from './TapDetail';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';

class TapControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTap: null
    };
  }

  handleClick = () => {
    const { dispatch } = this.props;
    const toggleForm = a.toggleForm();
    dispatch(toggleForm);
    this.setState({selectedTap: null});
  }

  handleAddingNewTapToList = (newTap) => {
    const { dispatch } = this.props;
    const addTap = a.addTap(newTap);
    dispatch(addTap);
    const toggleForm = a.toggleForm();
    dispatch(toggleForm);
  }

  handleChangingSelectedTap = (id) => {
    const selectedTap = this.props.masterTapList[id];
    this.setState({selectedTap: selectedTap});
  }

  handleTapPurchase = (id) => {
    const { dispatch } = this.props;
    const currentlySelectedTap = this.props.masterTapList[id];
    if (currentlySelectedTap.quantity > 0) {
      const sellPint = a.sellPint(currentlySelectedTap);
      dispatch(sellPint);
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
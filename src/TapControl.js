import React from 'react';
import NewTapForm from './NewTapForm';
import TapList from './TapList';
import TapDetail from './TapDetail';

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
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
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

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.setState.selectedTap != null) {
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
        onTapSelection={this.handleChangingSelectedTap}/>;
      buttonText = 'add new tap';
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default TapControl;
import React from 'react';
import NewTapForm from './NewTapForm';
import TapList from './TapList';

class TapControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  rendor(){
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTapForm />
    } else {
      currentlyVisibleState = <TapList />
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default TapControl;
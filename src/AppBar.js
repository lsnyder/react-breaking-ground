import React from 'react'
import AppBar from 'material-ui/AppBar';
import Radium from 'radium'


const styles ={
  topBar: {
    background: 'gray',
    flex: 100
  }
};

class Menu extends React.Component {
  render(){
    return (
      <div>
        <AppBar
          title='Luke Snyder'
          onLeftIconButtonTouchTap={this.handleToggle}
          style={styles.topBar}/>
      </div>
    )
  }
}

export default Radium(Menu);

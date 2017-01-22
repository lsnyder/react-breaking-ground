import React from 'react'
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import Radium from 'radium'


// const styles ={
//   topBar: {
//     background: 'gray',
//     flex: 100
//   }
// };

class Menu extends React.Component {
  render(){
    return (
      <div>
        <AppBar title="Luke Snyder" showMenuIconButton={false} />
        <Tabs>
          <Tab label="Tab 1"/>
          <Tab label="Tab 2"/>
          <Tab label="Tab 3"/>
          <Tab label="Tab 4"/>
        </Tabs>
      </div>
    )
  }
}

export default Radium(Menu);

import React from 'react'
import Menu from './Menu';

class App extends React.Component {
  render(){
    return (
      <div>
        <Menu location={this.props.location.pathname}/>
        {this.props.children}
      </div>
    )
  }
}

export default App

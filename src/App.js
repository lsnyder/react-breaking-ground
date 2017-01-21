//CLASS COMPONENT
//Primary difference between class component and stateless function
//component is that a class component can have state. A stateless
//function component can not

//Call of setState will only overwrite the values passed
//into it. Ex. cat remains unchanged only the value of txt
//is updated.

//Render function can only return a single node
//If you need to return multiple element they must be
//wrapped in a parent element.

//STATELESS FUNCTION COMPONENT
//Can't have state

// const App = () => <h1>Hello Stateless</h1>
import React from 'react'


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      txt: 'this is the state txt',
      cat: 5
    }
  }

  update(e) {
    this.setState({txt: e.target.value})
  }

  render() {
    let txt = this.props.txt
    return (
      <div>
        <input type="text" onChange={this.update.bind(this)}></input>
        <h1>{this.state.txt} - {this.state.cat}</h1>
      </div>
    )
  }
}

//Allows you to set default values for props
App.defaultProps = {
  txt: "This is the default text"
}

//Allows for Typechecking to catch errors
App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

export default App

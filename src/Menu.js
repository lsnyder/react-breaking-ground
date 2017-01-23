import React from 'react'
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import Radium from 'radium'
import { Link } from 'react-router'


class Menu extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      value: props.value || props.location.pathname.replace('/', '') || "about"
    }
  }

  handleChange = (value) => {
    this.setState({value: value})
  }

  render(){
    return (
      <div>
        <AppBar zDepth={0} title="Luke Snyder / Full Stack Engineer" showMenuIconButton={false} />
        <Tabs value={this.state.value} onChange={this.handleChange}>
          <Tab label="About Me" value="about" containerElement={<Link to="about"/>} />
          <Tab label="Experience" value="experience" containerElement={<Link to="experience"/> }/>
          <Tab label="Skills" value="skills" containerElement={<Link to="skills"/>} />
          <Tab label="Contact" value="contact" containerElement={<Link to="contact"/>} />
        </Tabs>
      </div>
    )
  }
}

export default Radium(Menu);

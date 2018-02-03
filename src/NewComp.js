import React from 'react';
import Greet from './Greet';
class NewComp extends React.Component{
  constructor(props) {
    super(props);
    let name = props.name;
    this.state = { name: name +" Chaudhary",time:new Date(),counter:1,toggle:false, loggedIn :false };
  }

  componentDidMount(){
    this.tickId = setInterval(
      ()=>this.tick(),1000
      );
  }

  componentWillUnmount(){
    clearInterval(this.tickId);
  }

  tick(){
    this.setState({time : new Date()});
    this.setState((prevState,props)=>({
      counter:prevState.counter+1
    }));
  }

  handleClick(e){
    e.preventDefault();
    this.setState(prevState=>({
      toggle: !prevState.toggle,
      loggedIn: !prevState.loggedIn
    }));
  }
  
  render(){
    return(
      <div>
      <h1>Hello {this.state.name}</h1>
      <h2>Counter is {this.state.counter}</h2>
      <h3>The date is {this.state.time.toLocaleDateString()} and time is {this.state.time.toLocaleTimeString()}</h3>
      <button onClick={(e)=>this.handleClick(e)}>{this.state.toggle?'ON':'OFF'}</button>
      <Greet loggedIn={this.state.loggedIn}/>
      </div>
    )
  }
}

export default NewComp;
import React, { Component } from 'react'

export default class Classes extends Component {
  constructor(){
    super();
    this.state = {
        message:"using classes (state)"
    }
  }
  clickHandle = () =>{
    this.setState({
      message:"new message"
    })
  }
  render() { 
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.clickHandle}>change messsage</button>
      </div>
    )
  }
}

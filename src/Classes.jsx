import React, { Component } from 'react'

export default class Classes extends Component {
  constructor(){
    super();
    this.state = {
        message:"using classes (state)"
    }
  }
  
  
  
    render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    )
  }
}

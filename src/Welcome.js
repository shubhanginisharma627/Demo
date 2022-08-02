import React, { Component } from 'react'

export class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {content: 'Welcome! '};
      }
      changehandler=()=>{
        this.setState({
            content:'Thankyou For Subscription '
        })
      }
  render() {
    return (
      <div>
        <h1>{this.state.content} {this.props.name}</h1>
        <button onClick={this.changehandler}>Subscribe</button>
      </div>
    )
  }
}

export default Welcome

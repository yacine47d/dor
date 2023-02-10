import React, { Component } from 'react';

class App extends Component {
  constructor (props) {
    super (props);
    this.state={
     count:0,
      person :{
        fullname: "Med yacine bouabdellah",
        bio :"my project",
        profession:"student"
      },
      show:false,
      counter:0 
    }
  }
  ComponentDidUpdate(){
    setInterval(()=>{
      this.setstate({counter:this.state.counter+1})
    },1000)
  }
  render() {
    return ( 
      <div>
        {
          this.state.show ? (<div>
            <h5>{this.state.person.fullname}</h5>
            <p>{this.state.person.bio}</p>
            <p>{this.state.person.profession}</p>
            </div> ) : null
        }
        <button onClick={()=>{this.setState({show:!this.state.show})}}>show my page</button>
        <div>
          counter : {this.state.counter}
        </div>
      </div>
    )
  }
}

export default App;


import React, { Component } from 'react';
import {Show} from './components/show'
import {Add} from './components/additem'

let reminders = [];
class App extends Component {
  state = {
    item1 : [
    ]
  }
  deleteitem = (id) => {
    const x = this.state.item1;
    const y = x.findIndex(item => item.id === id)
    x.splice(y,1)
    this.setState({
      x : x
    })
  }
 
  additem = (z) => {
    const x = this.state.item1;
    const s = x.length + 1;
    z.id = s;
    x.push(z);
    this.setState({
      x:x
    })
  }

  render()
  {
  return (
    <div className="App">
      <div className="container">
      <h1>TODO-LIST APP</h1><br />
      <table>
      <Show item1 = {this.state.item1} delete1={this.deleteitem}/>
      <Add additem={this.additem} />
      </table>
      </div>
    </div>
  );
  }
}

export default App;

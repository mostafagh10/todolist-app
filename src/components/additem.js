import React, { Component,Fragment } from 'react';

export class Add extends Component {

    state = {
        name : '',
        age : ''
    }

    handlevalue = (e) => {
        this.setState({
            //name : e.target.value,
            //age : e.target.value
            [e.target.id] : e.target.value
        })
    }

    handlesubmit = (e) => {
        e.preventDefault();
        this.props.additem(this.state);
        this.setState({
            name : '',
            age : ''
            //[e.target.id] : e.target.value
        })
    }

    render(){
        return(
            <tr>
                <td><input type="text" placeholder="enter your name" id="name" value={this.state.name} onChange={this.handlevalue} /></td>
                <td><input type="number" placeholder="enter your age" value={this.state.age} id="age" onChange={this.handlevalue} /></td>
                <td><input type="submit" value="Add Item" onClick={this.handlesubmit} /></td>
           </tr>
        )
    }
}
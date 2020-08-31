import React, { Component,Fragment } from 'react';
import {bake_cookie,read_cookie} from 'sfcookies'
export class Show extends Component {
    render(){
        const {item1} = this.props;
        const {delete1} = this.props;
        const length = item1.length;
        const theitem = length ? ( item1.map(item2 => {
            return(
                <tr key={item2.id}>
                    <td>{item2.name}</td>
                    <td>{item2.age}</td>
                    <td><button onClick={() => delete1(item2.id)}>&times;</button></td>
                </tr>
            );
         })
        ) : (
            <tr>
            <td colSpan="3">There're No Items To Show</td>
            </tr>
        )
        return(
            <Fragment>
                <tr>
                    <td>NAME</td>
                    <td>AGE</td>
                    <td>DELETE</td>
                </tr>
                {theitem}
            </Fragment>
        );
    }
}
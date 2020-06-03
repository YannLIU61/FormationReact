import React, { Component } from 'react';
import Singer from './Singer'
class Display extends Component{
    render(){
        return(
            <div>
                <h1>Singers</h1>
                <Singer name="aa" nation="FR"/>
                <Singer name="bb" nation="CN"/>
                <Singer name="cc" nation="CN"/>
                <Singer name="dd" nation="EN"/>
            </div>
        )
    }
}

export default Display
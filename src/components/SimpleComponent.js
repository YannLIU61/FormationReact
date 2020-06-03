import React, { Component } from 'react'

export class SimpleComponent extends Component {
    render() {
        console.log('render() du SimpleComponent')
        return (
            <div>
                <p>SimpleComponent: {this.props.name}</p>
            </div>
        )
    }
}

export default SimpleComponent

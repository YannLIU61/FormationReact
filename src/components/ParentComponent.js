
import React, { Component } from 'react'
import SimpleComponent from './SimpleComponent'
import PureComponent from './PureComponent'
import FunctionComp from './FonctionComponent'
// rce
export class ParentComponent extends Component {
    // only used by simple component
    shouldComponentUpdatenextProps(nextProps, nextState) {
        if (this.state.name !== nextState.name) {
            return true;
        }
        return false;
    }
    state = {
        name: 'IronMan'
    }
    changeName = () => {
        this.setState({
            name: "SuperMan"
        }
        )
    }
    render() {
        console.log('render() du composent Parent')
        return (
            <div>
                <p>ParentComponent</p>
                <SimpleComponent name={this.state.name} />
                <PureComponent name={this.state.name} />
                <FunctionComp name={this.state.name} />

                <button onClick={this.changeName}>Change</button>
            </div>
        )
    }
}

export default ParentComponent

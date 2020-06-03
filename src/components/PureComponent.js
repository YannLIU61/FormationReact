import React, {PureComponent} from 'react'

// PureComponent has it's own shouldComponentUpdate methode
class PureComp extends PureComponent{
    render() {
        console.log('render() du PureComponent')
        return (
            <div>
                <p>PureComponent: {this.props.name}</p>
            </div>
        )
    }
}

export default  PureComp
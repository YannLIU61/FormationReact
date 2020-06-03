import React from 'react'

function FunctionComp(props) {
    console.log('render() du FunctionComponent')
    return (
        <div>
            <p>FunctionComponent: {props.name}</p>
        </div>
    )
}

// export default FunctionComp
// like purecomponent, render only if there is a change
export default React.memo(FunctionComp)
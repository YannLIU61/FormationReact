import React from 'react'

const Singer=({name, nation})=>{
   
    return(
        <div>
            <p>{name} {nation}</p>
        </div>
    )
}
// in case of component en class: this.props.name this.props.nation
export default Singer
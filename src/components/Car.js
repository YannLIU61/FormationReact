import React from 'react';

// Creer un composent de fonction(pas besion State)
// (props.color props.children))
const Car = ({color, children}) => {

    const colorInfo = color ? (<p>Couleur: {color}</p>) : (<p>Couleur: default</p>);

    if(children){
        return (
            <div style={{ backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto' }}>
                <p>Marque: {children}</p>
                {colorInfo}
            </div>
        )
    }else{
        return(
            <div style={{ backgroundColor: 'red', width: '400px', padding: '10px', margin: '5px auto' }}>
            <p>Pas d'Info</p>
        </div> 
        )
    }
  
}

export default Car;
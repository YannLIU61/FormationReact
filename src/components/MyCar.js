import React, { Component } from 'react';
import Car from './Car'
import '../index.css'

class MyCar extends Component {

    noCopy = () => {
        alert('Merci ne pas copier le texte!');
    }

    addStyle = (e) => {
      
       if(e.target.classList.contains('styled')){
        e.target.classList.remove('styled');
       }else{
        e.target.classList.add('styled');
       }
    }
    render() {
        return (
            <div>
                <h1 onMouseOver={this.addStyle}>{this.props.title}</h1>

                <p onCopy={this.noCopy}>List of cars, text no Copy.</p>
                {/* color->props.color; Ford->props.children */}
                <Car color="red">Ford</Car>
                <Car >Mercedes</Car>
                <Car color="green"></Car>
            </div>
        )
    }
}
export default MyCar;
import React, { Component } from 'react';
import './App.css';
import MyCar from "./components/MyCar"
import Display from './components/Display'
import Form from './components/Form'
import ParentComponent from './components/ParentComponent'

class App extends Component {
  // pass title
  state = {
    titre: 'Mon catalogue voiture'
  }
  // change title by setState
  changerTitle = (e) => {
    this.setState({
      titre: "Mon nouveau Title"
    })
  }

  changeViaparam = (titre) => {
    this.setState({
      titre
    })
  }

  changeViaBind = (param) => {
    this.setState({
      titre: param
    })
  }
  onChangeViaInput = (e) => {
    this.setState({
      titre: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <MyCar title={this.state.titre} />

        <button onClick={this.changerTitle}>Changer le nom!</button>
        <button onClick={() => this.changeViaparam('Titre via un param')}>Via param!</button>
        <button onClick={this.changeViaBind.bind(this, 'Titre via bind')}>Via Bind!</button>
        <br />
        <br />
        <input type="text" onChange={this.onChangeViaInput} value={this.state.titre}></input>
        <br />
        <br />
        <Display />
        <br /><br />
        <Form />
        <ParentComponent/>
      </div>
    );
  }
}

export default App;

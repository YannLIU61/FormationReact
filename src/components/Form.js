import React, { Component } from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    color: red;
    font-size: 80px;
`

class Form extends Component {

    state = {
        username: '',
        color: '',
        colors: ["", "red", "blue", "green"],
        comment:''
    }
    handleUserName = e => {
        this.setState({
            username: e.target.value
        })
    }
    handleColor = e => {
        console.log(e.target.value)
        this.setState(
            {
                color: e.target.value
            }
        )
    }
    handleComment=e=>{
        this.setState({
            comment:e.target.value
        })
    }
    handleSubmitForm=e=>{
        e.preventDefault()
        console.log(`Username: ${this.state.username} Couleur: ${this.state.color} Comment: ${this.state.comment}`)
    }

    render() {
        return (
            <div>
                <Title>title
                </Title>
                <form onSubmit={this.handleSubmitForm}>
                    <div>
                        <label>Name: </label>
                        <input type="text" value={this.state.username} onChange={this.handleUserName}></input>
                    </div>
                    <div>
                        <label>Couleur: </label>
                        <select value={this.state.color} onChange={this.handleColor}>
                            {
                                this.state.colors.map((color,index) => {
                                    return <option key={index} value={color}>{color}</option>
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <label>Commentaire: </label>
                        <textarea value={this.state.comment} onChange={this.handleComment}></textarea>
                    </div>
                    {/* Pardefalut submit will refresh page, and lost data */}
                    <button type="submit">Valider</button>
                </form>
            </div>

        )
    }
}
export default Form
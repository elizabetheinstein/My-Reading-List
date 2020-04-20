import React from 'react'
import { AddBookForm } from './AddBookForm'

class AddBook extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            genre: '',
            authorId: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <AddBookForm 
            name={this.state.name}
            genre={this.state.genre}
            authorId={this.state.authorId}
            handleChange={this.handleChange}
            />
        )
    }
}

export default AddBook;

import React from 'react'
import { useQuery } from '@apollo/client'
import { AddBookForm } from './AddBookForm'
import { GET_AUTHORS } from '../Queries/queries'

class AddBook extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            genre: '',
            authorId: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const [addBook, { data }] = useMutation(ADD_BOOK)
        console.log('EVENT', event, 'STATE', this.state)
        // let img = event.target.imageUrl.value
        // if (!img) {
        //     img = 'https://i.pinimg.com/originals/08/ac/61/08ac618b26399585562c47f8e7296671.jpg'
        // }
        addBook({ variables: {
            name: this.state.name, 
            genre: this.state.genre, 
            authorId: this.state.authorId
        }})
        // window.location.href = '/books'
    }
    render() {
        return (
            <AddBookForm 
            name={this.state.name}
            genre={this.state.genre}
            authorId={this.state.authorId}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit} 
            />
        )
    }
}

export default AddBook;

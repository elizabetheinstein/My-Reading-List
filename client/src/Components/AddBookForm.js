import React from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { ADD_BOOK } from '../Queries/queries'

const displayAuthors = (props) => {
    const { loading, error, data } = useQuery(ADD_BOOK)
    var data = props.data
    console.log("DATA", this.props)
    if (data.loading) return <option disabled>Loading Authors...</option>
    else return data.authors.map(({id, name}) => (
            <option key={id} value={id} >{name}</option>
        )
    )
}

export const AddBookForm = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit}>
            <label htmlFor='name'>Book Name:</label>
            <input name='name' value={props.name} onChange={props.handleChange}/>
            <br />
            <label htmlFor='genre'>Genre:</label>
            <input name='genre' value={props.genre} onChange={props.handleChange}/>
            <br />
            <label htmlFor='author'>Author:
                <select onChange={props.handleChange}>
                    <option>Select Author</option>
                    {this.displayAuthors()}
                </select>
            </label>
            <br />
            <button type='submit'>+</button>
        </form>
    )
}
import React from 'react'
import { DisplayAuthors } from './DisplayAuthors'
import { useMutation } from '@apollo/client'
import { ADD_BOOK } from '../Queries/queries'


export const AddBookForm = (props) => {
    const [addBook, { data }] = useMutation(ADD_BOOK)
    return (
        <form onSubmit={e => {
            e.preventDefault()
            addBook({variables: {
                name: props.name,
                genre: props.genre,
                authorId: props.authorId
            }})
        }}>
            <label htmlFor='name'>Book Name:</label>
            <input name='name' value={props.name} onChange={props.handleChange}/>
            <br />
            <label htmlFor='genre'>Genre:</label>
            <input name='genre' value={props.genre} onChange={props.handleChange}/>
            <br />
            <label htmlFor='author'>Author:
                <select onChange={props.handleChange}>
                    <option>Select Author</option>
                    <DisplayAuthors />
                </select>
            </label>
            <br />
            <button type='submit'>+</button>
        </form>
    )
}
import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { GET_AUTHORS, ADD_BOOK } from '../Queries/queries'

const AddBook = () => {
    const {loading, error, data} = useQuery(GET_AUTHORS);
    const [addBook] = useMutation(ADD_BOOK);
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [ authorId, setAuthorId]= useState('')

    const displayAuthors = () => {
    if (loading) return <option>Loading Authors...</option>;
    if (error) return <option>Error Loading Authors :(</option>;

    return (
        <option>Select Author</option>,
        data.authors.map(({id, name}) => (
        <option key={id} value={id}>{name}</option>
        ))
    );
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        addBook({
            variables: {
                name,
                genre,
                authorId
            }
        })
    }

    return (
        <form id="add-book" onSubmit={handleSubmit}>
            <div className="field">
                <label>Book name:</label>
                <input type="text" onChange = {(event)=>setName(event.target.value)}/>
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" onChange = {(event)=>setGenre(event.target.value)}/>
            </div>
            <div className="field">
                <label>Author:</label>
                <select onChange = {(event)=>setAuthorId(event.target.value)}>
                    <option>Select author</option>
                    { displayAuthors() }
                </select>
            </div>
            <button>+</button>
       </form>
    );
}

export default AddBook;

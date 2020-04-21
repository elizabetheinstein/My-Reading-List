import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../Queries/queries'

const BookList = () => {
    const { loading, error, data } = useQuery(GET_BOOKS)
    
    if (loading) return <p>Loading...</p>
    if (error) return <p>{`Error: ${error}`}</p>

    console.log("DATA", data)

    return data.books.map(({ id, name, author }) => (
        <li key={ id }>{ name } by {author.name}</li>
    ))
}

export default BookList;

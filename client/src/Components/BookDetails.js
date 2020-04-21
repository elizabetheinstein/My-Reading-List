import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_BOOK } from '../Queries/queries'

const BookDetails = ({bookId}) => {
    const { loading, error, data } = useQuery(GET_BOOK, { skip: !bookId, variables: {id: bookId }})

    console.log("DATA in BD", data)

    console.log("PROPS", bookId)
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{`Error: ${error.message}`}</p>;
    if (!data) return <p>No book selected.</p>;

    const { 
        book: {
            name, 
            genre, 
            author
        }
    } = data

    const books = author.books.map(({ id, name }) => {
        return <li key={id}>{name}</li>;
    });

    return (
        <div id="book-details">
            <div key={bookId}>
                <h2>{name}</h2>
                <p>{genre}</p>
                <p>{author.name}</p>
                <p>All books by this author</p>
                <ul className="other-books">{books}</ul>
            </div>
        </div>
    )
}

export default BookDetails;

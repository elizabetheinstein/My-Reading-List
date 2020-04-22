import React, {useState} from 'react';
import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../Queries/queries'
import BookDetails from './BookDetails'

const BookList = () => {
    const { loading, error, data } = useQuery(GET_BOOKS)
    const [selected, setSelected] = useState(null)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error in book list: {error.message}</p>

    console.log("DATA", data)

    const content = data.books.map(({ id, name }) => (
        <div>
            <ul id='book-list'>
                <li key={id} onClick={e => {setSelected(id)}}>{name}</li>
            </ul>
        </div>
    ))
    return (
        <div>
            <div>{content}</div>
            <BookDetails bookId={selected} />
        </div>
    )
}

export default BookList;

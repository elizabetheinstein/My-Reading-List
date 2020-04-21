import { gql } from '@apollo/client';

const GET_BOOKS = gql`
    {
        books {
            id
            name
            author {
                name
            }
        }
    }
`

const GET_AUTHORS = gql`
    {
        authors {
            id
            name
            
        }
    }
`

const ADD_BOOK = gql`
    mutation ($name: String!, $genre: String!, $authorId: ID!) {
        addBook (name: $name, genre: $genre, authorId: $authorId) {
            name
            id
        }
    }
`

export {GET_BOOKS, GET_AUTHORS, ADD_BOOK}
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
    mutation {
        addBook (name: "", genre: "", authorId: "") {
            name
            id
        }
    }
`

export {GET_BOOKS, GET_AUTHORS, ADD_BOOK}
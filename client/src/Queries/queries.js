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

const GET_BOOK = gql`
    query GetBook($id: ID){
        book(id: $id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    id
                    name
                }
            }
        }
    }
`

export {GET_BOOKS, GET_AUTHORS, ADD_BOOK, GET_BOOK}
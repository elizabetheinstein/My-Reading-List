import React, { Component } from 'react';
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import BookList from './Components/BookList'
import AddBook from './Components/AddBook'

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: 'http://localhost:4000/graphql'
    })
});

const App = () => {
    return (
        <ApolloProvider client={client}>
            <div id="main">
                <h1>My Reading List</h1>
                <BookList />
                <AddBook />
            </div>
        </ApolloProvider>
    );
}

export default App;

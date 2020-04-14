const graphql = require('graphql');
const _ = require('lodash')

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLID, GraphQLList } = graphql

//dummy data
const books = [
    {name: 'The Life of Liz', genre: 'Fantasy', id: '1', authorId: '2'},
    {name: 'The Life of Jim', genre: 'Fantasy', id: '2', authorId: '1'}
]

const authors = [
    {name: 'Jim', age: 31, id: '1'},
    {name: 'Liz', age: 23, id: '2'}
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: { 
            type: AuthorType,
            resolve(parent, args) {
                console.log(parent)
                return _.find(authors, {id: parent.authorId})
            }
        }
    })
})

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: {
            type: GraphQLList(BookType),
            resolve(parent, args) {
                return _.filter(books, {authorId: parent.id})
            }
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return _.find(books, {id: args.id} )
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve(parents, args) {
                return _.find(authors, {id: args.id } )
            }
        },
        books: {
            type: GraphQLList(BookType),
            resolve(parent, args) {
                return books
            }
        },
        authors: {
            type: GraphQLList(AuthorType),
            resolve(parent, args) {
                return authors
            }
        }
    })
})

module.exports = new GraphQLSchema({
    query: RootQuery
})
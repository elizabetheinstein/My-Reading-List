const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./server/schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();

app.use(cors())

mongoose.connect('mongodb+srv://Elle:'+ process.env.password +'@test-cluster-jcdfi.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
  })
mongoose.connection.once('open', () => console.log('Connection has been made.'))



app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Listening for requests on port 4000!')
});
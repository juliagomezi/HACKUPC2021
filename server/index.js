const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

const Task = require('./models/Tasks')

require('./database');

const app = express()
const port = 3000

const getTask = (query) => {
    return Task.find({ title: query.name })
}

let schema = buildSchema(`
    type Query {
        task(title: String!): Task
    }
    type Task {
        title: String
        description: String
        group: String
        data: Int
        subtask: subTask
    }
    type subTask {
        title: String
        description: String
    }
`);

let root = {
    task: getTask
};

app.get('/', (req, res) => res.send('Hello Word!'))

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(port, () => console.log(`App de ejemplo escuchando el puerto ${port}!`))

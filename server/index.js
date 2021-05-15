const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')
const Task = require("./models/Tasks")
const app = express()
const port = 3000

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin1234@cluster0.vgm2t.mongodb.net/hackupc2021?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const dbName = "hackupc2021";

client.connect()
console.log("Connected correctly to server");

const getTask = (query) => {
    return Task.findOne({ title: title.name }, function (err, response) {
		if(err) return err
		return response;
	})
}


let schema = buildSchema(`
type Query {
    Task: Task
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

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.get('/', (req, res) => res.send('Hello Word!'))

app.listen(port, () => console.log(`App de ejemplo escuchando el puerto ${port}!`))

// async function mongo(){
//     try {
//         await client.connect();
//         console.log("Connected correctly to server");
//         const db = client.db(dbName);
        
//         // Use the collection "people"
//         const col = db.collection("people");
        
//         // Construct a document
//         // Construct a document
//         let subTask = [
//             {
//                 "title": "Saltar a corda",
//                 "description": "Aprendre a saltar a corda"
//             },
//             {
//                 "title": "Malabars",
//                 "description": "Aprendre a fer malabars"
//             }
//         ]

//         let task = {
//             "title": "Exam",
//             "description": "Examen d'Educació Física",
//             "group": "Studies",
//             "data": "2021-06-15T13:00:00",
//             "subtask": subTask
//         }
        
//         // Insert a single document, wait for promise so we can read it back
//         const p = await col.insertOne(task);
//         // Find one document
//         const myDoc = await col.findOne();
//         // Print to the console
//         console.log(myDoc);
        
//     } catch (err) {
//         console.log(err.stack);
//     }
    
//     finally {
//         await client.close();
//     }
// }
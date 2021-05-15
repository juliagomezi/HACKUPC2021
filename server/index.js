const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')
const app = express()
const port = 3000

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin1234@cluster0.vgm2t.mongodb.net/hackupc2021?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const dbName = "hackupc2021";

let schema = buildSchema(`
type Query {
    hello: String
}
`);

let root = {
    hello: () => {
        return 'Hello world!';
    },
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.get('/', (req, res) => res.send('Hello Word!'))

app.listen(port, () => console.log(`App de ejemplo escuchando el puerto ${port}!`))

async function mongo(){
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(dbName);
        
        // Use the collection "people"
        const col = db.collection("people");
        
        // Construct a document
        let personDocument = {
            "user": "Alonso",
        }
        
        // Insert a single document, wait for promise so we can read it back
        const p = await col.insertOne(personDocument);
        // Find one document
        const myDoc = await col.findOne();
        // Print to the console
        console.log(myDoc);
        
    } catch (err) {
        console.log(err.stack);
    }
    
    finally {
        await client.close();
    }
}

mongo().catch(console.dir); 
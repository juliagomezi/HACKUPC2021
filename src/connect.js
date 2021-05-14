const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string
const url = "mongodb+srv://admin:admin1234@cluster0.vgm2t.mongodb.net/hackupc2021?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
 
 // The database to use
 const dbName = "hackupc2021";

 async function run() {
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

run().catch(console.dir);
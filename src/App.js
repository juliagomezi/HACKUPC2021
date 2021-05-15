import logo from './logo.svg';
import './App.css';
import react from 'react';
import Main from './Main.js';

const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string
const url = "mongodb+srv://admin:admin1234@cluster0.vgm2t.mongodb.net/hackupc2021?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
 
 // The database to use
 const dbName = "hackupc2021";

class App extends React.Component{

	render() {
		return (
			<Main/>
		)
	}
}

export default App;

// Importing express framework from package.json using (ES Module)
import express from 'express';
// Declaring the app is the variable to use express() //everytime we want to tap into the express module this works
const app = express()
// Assigning a port for listening, opening that port to let the information in and then all the other ports are closed
const port = 3000;

//If the request comes with a URL we'll send back "Hello world"
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//If the client is asking for the listening port we send back the 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
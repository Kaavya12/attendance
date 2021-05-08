
// import routes

(async function() {
  const Router = await require("./backend/routes/routes.js");
 // import express
const express =  require("express");
// import cors
const cors = require("cors");
const bodyParser = require("body-parser")
// init express
const app = express();
 
// use express json
app.use(express.json());
 
// use cors
app.use(cors());

app.use(bodyParser.json())

// use router
app.use(Router);
  
 
app.listen(3000, () => console.log('Server running at http://localhost:5000'));
})()

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) =>{
  response.send('Hello from express node ');
})
app.listen(port,(err) => {
  if (err) {
    console.log('somethind bad happened',err);
  }
  console.log('server is listening on port',port);
})

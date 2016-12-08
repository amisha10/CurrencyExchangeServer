const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/html1', (request, response) => {
  response.render('home', {
    name: 'Amisha',
    rate: '1.32'
  })
})

app.get('/html2', (request, response) => {
  response.render('page', {
    name: 'Amisha',
    site: 'http://www.bankofcanada.ca/rates/exchange/'
  })
})

app.get('/json', function(req, res) {
  const fs = require('fs');
  console.log('start reading file...');
  fs.readFile('exchange','utf8',function(err,content){
    if (err) {
      console.log('error happened during reading the file');
      return console.log(err);
    }
    res.json(content)
    console.log(content);
  })
})

app.listen(3000);

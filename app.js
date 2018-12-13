
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const blogRouter = require('./blogRouter');
const {BlogPosts} = require('./models');

const jsonParser = bodyParser.json();



// log the http layer
app.use(morgan('common'));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});




app.use('/blog-posts', blogRouter);


app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});

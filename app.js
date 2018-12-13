
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
app.get('blog-posts',  (req, res) => {
  res.sendFile(__dirname + '/views/index.html?ututu');
});
app.get('blog-posts:id',  (req, res) => {
  res.sendFile(__dirname + '/views/index.html?trtr');
});



//app.use('/blog', blogRouter);
app.use('/blog-posts', blogRouter);
app.use('/blog-posts/:id', blogRouter);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});

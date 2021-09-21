var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  mongoose = require('mongoose'),
  path = require("path"),
  fileUpload = require("express-fileupload"),
  cors = require('cors')
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/WatchDB',
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => {
    console.log("Connected !!!")
  }).catch(err => {
    console.log(err);
  });

//file upload
app.use(express.static(path.join(__dirname, './public')));

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));

app.use(cors({}))
app.use(express.json());

var routes = require('./api/route');
routes(app);

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);

console.log('Server started on: ' + port);

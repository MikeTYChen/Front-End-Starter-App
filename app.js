//===================== modules =====================
var express = require('express'),
    bodyParser = require('body-parser');
var app = express();

//===================== Config =====================

app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(__dirname + '/public/dist'));
//===================== Routes =====================


//===================== Start ======================
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
  console.log('Our app is running on port', app.get('port'));
});
exports = module.exports = app;

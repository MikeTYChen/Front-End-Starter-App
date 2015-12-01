//===================== modules =====================
var express = require('express');
var app = express();

//===================== Config =====================
app.set('view engine', 'ejs');
app.set("views", __dirname + '/app/views');
//===================== Routes =====================
app.get('/', function(req, res) {
	res.render('index');
});
//===================== Start ======================
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
  console.log('Our app is running on port', app.get('port'));
});
exports = module.exports = app;
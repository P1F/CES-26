var response = null;

const express = require('express'),
        app = express(),
        path = require('path'),
        multer = require('multer'),
        fs = require('fs');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
});
const upload = multer({storage});

app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/' + 'index.html');
});
app.get('/data_get', function(req, res){
    response = {
        name: req.query.name,
        mail: req.query.mail
    };
    console.log(response);
    res.end(JSON.stringify(response));
});
app.post('/file_upload', upload.single('file'), function(req, res){
    response = {
        filename: res.req.file.originalname,
        size: res.req.file.size/1000 + 'kb'
    };
    console.log(response);
    res.send('<h2>Upload realizado com sucesso</h2>');
});
app.get('/list_users', function(req, res){
    fs.readFile(__dirname + '/public/' + 'users.json', 'utf8', function(err, data){
        if (err) return console.log(err);
        res.end(data);
    });
});

var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});
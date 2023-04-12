
var mysql = require('mysql');

connection.query("SELECT * FROM bank_accounts WHERE dob = ? AND bank_account = ?", [
    req.body.dob,
    req.body.account_number
], function (error, results) { });


connection.query("SELECT * FROM bank_accounts WHERE dob = :dob AND bank_account = :account_number", {
    dob: req.body.dob,
    account_number: req.body.account_number
}, function (error, results) { });


const mycon = mysql.createConnection({ host: host, user: user, password: pass, database: db });
mycon.connect(function (err) {
    mycon.query('SELECT name FROM users WHERE id = ?', [req.body.dob], (err, res) => { });
});

const pg = require('pg');
const pgcon = new pg.Client({ host: host, user: user, password: pass, database: db });
pgcon.connect();
var inp =  req.foo.bar;
pgcon.query('SELECT name FROM users WHERE id = $1', [inp], (err, res) => { });


const pg = require('pg');
const pool = new pg.Pool(config);

function handler(req, res) {
    var qry = "SELECT FOO,BAR FROM TABLE WHERE CAT=$1"
        + " ORDER BY FOO";
    pool.query(qry, [req.foo.nar], function (err, results) {
    });
}







//---------------




const express = require('express')
const router = express.Router()

router.get('/greeting', (req, res) => {
    // ruleid:express_xss
    const { name } = req.query;
    res.send('<h1> Hello :' + name + "</h1>")
})

//template handle escaping 
router.get('/greet-template', (req, res) => {
    name = req.query.name
    res.render('index', { user_name: name });
})

module.exports = router


app.get('/', function (req, res) {
    // ruleid:express_xss
    var user = req.query.name;

    msg = "Hi " + user
    res.send('Response</br>' + msg);
});


var msg = '';
app.get('/3', function (req, res) {
    // ruleid:express_xss
    var user = req.query.name;

    msg = "Hi " + user
    res.send('Response</br>' + msg);
});

app.get('/2', function (req, res) {
    // ruleid:express_xss
    var user = { user: req.query.name };
    res.send('Response</br>' + user.name);
});

app.get('/1', function (req, res) {
    // ruleid:express_xss
    var user = req.query.name;
    var msg = [];
    msg.push(user);
    res.send('Response</br>' + msg[0]);
});

app.get('/4', function (req, res) {
    var user = req.query.name;
    var header = "<html>";
    var msg = 'Hi ' + user;
    var footer = "</html>";
    var output = header + msg + footer;
    res.send(output);
});





var express = require('express');
var app = express();
app.get('/', function (req, res) {
    // ruleid:express_xss
    var resp = req.query.name;
    res.send('Response</br>' + resp);
});
app.get('/3', function (req, res) {
    // ruleid:express_xss
    var resp = req.query.name;
    res.write('Response</br>' + resp);
});

app.get('/3', function (req, res) {
    // ruleid:express_xss
    var resp = req.foo;
    var x = 1;
    res.write('Response</br>' + resp);
});

app.get('/xss', function (req, res) {
    // ruleid:express_xss
    var html = "ASadad" + req.query.name + "Asdadads"
    res.write('Response</br>' + html);
});
app.get('/xss', function (req, res) {
    // ruleid:express_xss
    res.write('Response</br>' + req.query('doo'));
});
app.get('/xss', function (req, res) {
    // ruleid:express_xss
    res.write('Response</br>' + req.query.name);
});

app.get('/noxss', function (req, res) {
    var resp = req.query.name;
    res.write('Response</br>');
});

app.get('/noxs2s', function (req, res) {
    var resp = req.query.name;
    res.write('Response</br>' + foo);
});

app.get('/xss', function (req, res) {
    // ruleid:express_xss
    var resp = req.query.name;
    var html = "ASadad" + resp + "Asdadads"
    res.write('Response</br>' + html);
});
app.listen(8000);

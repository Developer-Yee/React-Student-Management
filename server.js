const fs = require('fs');
const express = require('express');
const request = require('request');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});
connection.connect();

app.get('/api/customers', (req, res) => {
    connection.query(
      "SELECT * FROM student",
      (err, rows, fields) => {
        res.send(rows);
      }
    );
});

app.post('/api/customers', (req, res) => {
  let sql = 'INSERT INTO student VALUES(?, ?, ?, null, null, null)';
  let name = req.body.name;
  let grade = req.body.grade;
  let rank = req.body.rank;
  let params = [name, grade, rank];
  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
    }
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
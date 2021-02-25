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
      "SELECT * FROM student WHERE isDeleted = 0",
      (err, rows, fields) => {
        res.send(rows);
      }
    );
});

app.post('/api/customers', (req, res) => {
  let sql = 'INSERT INTO student VALUES(?, ?, ?, null, null, null, 0, now(), null)';
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

app.delete('/api/customers/:name', (req, res) => {
  let sql = 'UPDATE student SET isDeleted = 1 WHERE name = ?';
  let params = [req.params.name];
  console.log(req.params);
  console.log(req.params.name);
  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
    }
  )
});

app.listen(port, () => console.log(`Listening on port ${port}`));
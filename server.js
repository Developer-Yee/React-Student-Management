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
  database: conf.database,
  multipleStatements : true
});
connection.connect();

app.get('/api/customers', (req, res) => {
    connection.query(
      "SELECT * FROM student WHERE isDeleted = 0 order by grade, newrank, name, task",
      (err, rows, fields) => {
        res.send(rows);
      }
    );
});

app.post('/api/customersInformation', (req, res) => {
  let grade = req.body.grade;
  let rank = req.body.rank;
  console.log(grade);
  console.log(rank);
  let sql = "SELECT DISTINCT name FROM student WHERE grade ='" + grade + "' AND newrank=" + rank + ";";
  connection.query(
    sql,
    (err, rows, fields) => {
      res.send(rows);
    }
  );
});

app.post('/api/addGroubtasks', (req, res) => {
  let grade = req.body.grade;
  let rank = req.body.rank;
  let task = req.body.task;
  let volume = req.body.volume;
  let name = req.body.name;
  let params = [name, grade, task, volume, rank];
  let sql = 'INSERT INTO student VALUES(?, ?, 0, ?, ?, 0, 0, now(), 0, ?)';
  connection.query(
    sql, params,
    (err, rows, fields) => {
      res.send(rows);
    }
  ); 
});

app.get('/api/customersDelete', (req, res) => {
  connection.query(
    "SELECT DISTINCT name FROM student WHERE isDeleted = 0",
    (err, rows, fields) => {
      res.send(rows);
    }
  );
});

app.post('/api/addGroubtask', (req, res) => {
  let grade = req.body.grade;
  let rank = req.body.rank;
  let task = req.body.task;
  let volume = req.body.volume;
  let params = [task, volume];
  console.log(params);
  let sql = 'UPDATE student SET task = "' + task + '" where newrank= ' + rank + ' AND grade= "' + grade + '";';
  let sql1 = 'UPDATE student SET volume = "' + volume + '" where newrank= ' + rank + ' AND grade= "' + grade + '";';
  let sql2 = 'UPDATE student SET isChecked = 0 where newrank= ' + rank + ' AND grade= "' + grade + '";';

  console.log(sql + sql1 + sql2);
  connection.query(sql + sql1 + sql2,
    (err, rows, fields) => {
      res.send(rows);
    }
  );
});

app.post('/api/customers', (req, res) => {
  let sql = 'INSERT INTO student VALUES(?, ?, 0, null, null, null, 0, now(), 0, ?)';
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
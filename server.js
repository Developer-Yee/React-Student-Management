const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req, res) => {
      res.send([{
        'rank' : 1,
        'name' : '홍길동',
        'work1' : '개념원리',
        'work2' : '고쟁이',
        'work3' : 'TEST'
      },
      {
        'rank' : 2,
        'name' : '한성희',
        'work1' : '개념원리',
        'work2' : '고쟁이',
        'work3' : 'TEST'
      },
      {
        'rank' : 3,
        'name' : '이순신',
        'work1' : '개념원리',
        'work2' : '고쟁이',
        'work3' : 'TEST'
      }
      ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
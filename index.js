const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('hello'));
app.get('/test', (req, res) => res.send('test'));

app.listen(3000, () => console.log('hello'));

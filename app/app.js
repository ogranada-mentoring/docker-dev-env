
const express = require('express');
const dotenv = require('dotenv');

const app = express();

app.get('/', (req, res) => {
    res.send('OK...');
});

dotenv.config();
const PORT = process.env.PORT || 9090;
app.listen(PORT, ()=> console.log(`ready at ${PORT}...`))

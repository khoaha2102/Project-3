const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Form submission - Name: ${name}, Email: ${email}, Message: ${message}`);
    res.send('Submitted!!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

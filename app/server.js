const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('.'));
app.use(express.json());

// Endpoint to fetch data
app.get('/data', (req, res) => {
    fs.readFile(path.join(__dirname, 'assets', 'data.json'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading data.json');
        } else {
            try {
                const parsedData = JSON.parse(data);
                res.json(parsedData);
            } catch (parseError) {
                console.error('Error parsing JSON from file:', parseError);
                res.status(500).send('Error parsing data.json');
            }
        }
    });
});

// Endpoint to update data
app.post('/data', (req, res) => {
    fs.writeFile(path.join(__dirname, 'assets', 'data.json'), JSON.stringify(req.body, null, 2), 'utf8', err => {
        if (err) {
            res.status(500).send('Error updating data.json');
        } else {
            res.send('Data updated successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
